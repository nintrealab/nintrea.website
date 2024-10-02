export class ObserverManager {
    static instances = new Map();

    static getInstance(options) {
        const key = `${options.rootMargin}-${options.threshold}`;
        if (!ObserverManager.instances.has(key))
            ObserverManager.instances.set(key, new ObserverManager(options));
        return ObserverManager.instances.get(key);
    }

    constructor(options) {
        this.handlers = new Map();

        // Skip when SSR
        if (typeof window === "undefined") {
            return;
        }

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const handler = this.handlers.get(entry.target);
                if (handler && entry.isIntersecting) {
                    handler(entry.target);
                }
            });
        }, options);
    }

    // Return unobserve callback directly
    observe(element, handler) {
        this.handlers.set(element, handler);
        this.observer?.observe(element);

        return () => this.unobserve(element);
    }

    unobserve(element) {
        this.handlers.delete(element);
        this.observer?.unobserve(element);
    }
}