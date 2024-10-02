export const RawToData = ({ rawData = "" }) =>
{
    const lines     = rawData.trim().split('\n').filter(Boolean);
    const header    = lines[0].split('|').filter(Boolean).map(header => ({ column: header.trim(), key: header.trim().toLocaleLowerCase().replace(/[^a-zA-Z0-9\s]/g, '') }));
    const body      = lines.slice(2).map(line => {
        const values = line.split('|').filter(Boolean).map(value => value.trim());
        return header.reduce((obj, h, index) => {
            obj[h.key] = values[index];
            return obj;
        }, {});
    });

    return {
        header,
        body
    }
};

export const StringToCode = (data) => {
    return data
        // Generate image
        .replace(/\!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" width="50" height="50" />')

        // Generate link
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-code">$1</a>')

        // Generate inline code
        .replace(/```([^`]+)```/g, '<pre><code class="font-code text-code">$1</code></pre>')

        // Generate block code
        .replace(/`([^`]+)`/g, `<code class="font-code text-code">$1</code>`)

        // Generate bold
        .replace(/\*\*\*([^*]+)\*\*\*/g, '<b>$1</b>')

        // Generate italic
        .replace(/\*(.*?)\*/g, '<i class="italic">$1</i>')

        // Generate blockquote
        .replace(/^>(.+)$/gm, '<blockquote>$1</blockquote>');
}