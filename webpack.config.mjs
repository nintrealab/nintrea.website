import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import WebpackPwaManifest from 'webpack-pwa-manifest';

const __filename    = fileURLToPath(import.meta.url);
const __dirname     = path.dirname(__filename);

const icons = [
    {
        src: `${path.resolve(__dirname, "src")}/assets/android-chrome-192x192.png`,
        sizes: "192x192",
        type: "image/png"
    },
    {
        src: `${path.resolve(__dirname, "src")}/assets/android-chrome-512x512.png`,
        sizes: "512x512",
        type: "image/png"
    },
    {
        src: `${path.resolve(__dirname, "src")}/assets/android-chrome-192x192.png`,
        sizes: "192x192",
        type: "image/png",
        purpose:  "maskable"
    },
]


const screenshots = [
    {
        src: `/images/screenshot-1.png`,
        sizes: "1200x600",
        type: "image/png",
        form_factor: "narrow",
        label: "Light Mode"
    },
    {
        src: `/images/screenshot-1.png`,
        sizes: "1200x600",
        type: "image/png",
        form_factor: "wide",
        label: "Dark Mode"
    }
]


export default {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/[name].bundle.js?id=[contenthash:10]",
        clean: true,
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            minify: true,
            enabled: true,
            inject: "body",
        }),
        new ReactRefreshWebpackPlugin(),
        new WebpackPwaManifest({
            publicPath: '/',
            name: "Nintrea Webiste",
            short_name: "Nintrea",
            description: "Nintrea Webiste ជាគេហទំព័រដែលប្រមូលផ្ដុំទៅដោយឯកសារពហុព័ត៌មាន (អត្ថបទ រូបភាព សំឡេង និងវីដេអូ) សម្រាប់ចែករំលែក និងជាជំនួយដល់ការសិក្សា ព្រមទាំងការបង្រៀន ភាសាខ្មែរ របស់សិស្សានុសិស្ស មាតាបិតាសិស្ស និងលោកគ្រូ អ្នកគ្រូភាសាខ្មែរ។",
            start_url: "/",
            background_color: "#ffffff",
            theme_color: "#ffffff",
            crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
            icons: icons,
            screenshots: screenshots,
            filename: "site.webmanifest"
        })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [ 'react-refresh/babel' ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|jpg|gif|webmanifest|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '/images/',
                            publicPath: '/images/'
                        }
                    }
                ]
            }
        ]
    }
}