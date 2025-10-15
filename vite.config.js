import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const pages = {"log_in":{"outputDir":"./log_in","lang":"en","title":"Blank | Start from scratch","cacheVersion":3,"meta":[{"name":"title","content":"Blank | Start from scratch"},{"itemprop":"name","content":"Blank | Start from scratch"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Blank | Start from scratch"},{"property":"og:title","content":"Blank | Start from scratch"},{"property":"og:site_name","content":"Blank | Start from scratch"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\nbody { background-color: #FAFAFA }\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/log_in/"},{"rel":"alternate","hreflang":"en","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/log_in/"}]},"deals":{"outputDir":"./deals","lang":"en","title":"Blank | Start from scratch","cacheVersion":3,"meta":[{"name":"title","content":"Blank | Start from scratch"},{"itemprop":"name","content":"Blank | Start from scratch"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Blank | Start from scratch"},{"property":"og:title","content":"Blank | Start from scratch"},{"property":"og:site_name","content":"Blank | Start from scratch"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\nbody { background-color: #FAFAFA }\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/deals/"},{"rel":"alternate","hreflang":"en","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/deals/"}]},"settings":{"outputDir":"./settings","lang":"en","title":"Blank | Start from scratch","cacheVersion":3,"meta":[{"name":"title","content":"Blank | Start from scratch"},{"itemprop":"name","content":"Blank | Start from scratch"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Blank | Start from scratch"},{"property":"og:title","content":"Blank | Start from scratch"},{"property":"og:site_name","content":"Blank | Start from scratch"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\nbody { background-color: #FAFAFA }\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/settings/"},{"rel":"alternate","hreflang":"en","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/settings/"}]},"users":{"outputDir":"./users","lang":"en","title":"Blank | Start from scratch","cacheVersion":3,"meta":[{"name":"title","content":"Blank | Start from scratch"},{"itemprop":"name","content":"Blank | Start from scratch"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Blank | Start from scratch"},{"property":"og:title","content":"Blank | Start from scratch"},{"property":"og:site_name","content":"Blank | Start from scratch"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\nbody { background-color: #FAFAFA }\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/users/"},{"rel":"alternate","hreflang":"en","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/users/"}]},"index":{"outputDir":"./","lang":"en","title":"Blank | Start from scratch","cacheVersion":3,"meta":[{"name":"title","content":"Blank | Start from scratch"},{"itemprop":"name","content":"Blank | Start from scratch"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Blank | Start from scratch"},{"property":"og:title","content":"Blank | Start from scratch"},{"property":"og:site_name","content":"Blank | Start from scratch"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\nbody { background-color: #FAFAFA }\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://606fc9f7-5f19-4b24-a2fd-6eadd56970c8.weweb-preview.io/"}]}};

// Read the main HTML template
const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8');
const compiledTemplate = handlebars.compile(template);

// Generate an HTML file for each page with its metadata
Object.values(pages).forEach(pageConfig => {
    // Compile the template with page metadata
    const html = compiledTemplate({
        title: pageConfig.title,
        lang: pageConfig.lang,
        meta: pageConfig.meta,
        scripts: {
            head: pageConfig.scripts.head,
            body: pageConfig.scripts.body,
        },
        alternateLinks: pageConfig.alternateLinks,
        cacheVersion: pageConfig.cacheVersion,
        baseTag: pageConfig.baseTag,
    });

    // Save output html for each page
    if (!fs.existsSync(pageConfig.outputDir)) {
        fs.mkdirSync(pageConfig.outputDir, { recursive: true });
    }
    fs.writeFileSync(`${pageConfig.outputDir}/index.html`, html);
});

const rollupOptionsInput = {};
for (const pageName in pages) {
    rollupOptionsInput[pageName] = path.resolve(__dirname, pages[pageName].outputDir, 'index.html');
}

export default defineConfig(() => {
    return {
        plugins: [nodePolyfills({ include: ['events', 'stream', 'string_decoder'] }), vue()],
        base: "/",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
            postcss: {
                plugins: [autoprefixer],
            },
        },
        build: {
            chunkSizeWarningLimit: 10000,
            rollupOptions: {
                input: rollupOptionsInput,
                onwarn: (entry, next) => {
                    if (entry.loc?.file && /js$/.test(entry.loc.file) && /Use of eval in/.test(entry.message)) return;
                    return next(entry);
                },
                maxParallelFileOps: 900,
            },
        },
        logLevel: 'warn',
    };
});
