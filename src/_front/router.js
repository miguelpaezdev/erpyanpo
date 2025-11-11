import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"606fc9f7-5f19-4b24-a2fd-6eadd56970c8","homePageId":"9f9af3b0-fded-4d4d-854b-31e28e8d9fb3","authPluginId":"e93a2dfd-9b19-473e-b445-c666fed4e14a","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{},"workflows":[],"pages":[{"id":"88721e3a-e7b6-49d5-9e9b-d8962a52c846","linkId":"88721e3a-e7b6-49d5-9e9b-d8962a52c846","name":"Usuarios","folder":"Usuarios/","paths":{"en":"inventory-copy","default":"inventory-copy"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"a17e74a1-9672-46b8-92cc-ee374388e425","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"37c3bf0b-e88f-424c-88c9-928cd6369812","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"b9ded3da-d1ff-4bf4-ac05-f14bf8036609","sectionTitle":"Content","linkId":"cd775f95-aba0-43cf-aab2-89c02b2fe1b4"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"9f9af3b0-fded-4d4d-854b-31e28e8d9fb3","linkId":"9f9af3b0-fded-4d4d-854b-31e28e8d9fb3","name":"Log in","folder":null,"paths":{"en":"log_in","default":"log_in"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"54f669bf-5e59-48a3-945b-f6d0298b242b","sectionTitle":"Sign in","linkId":"6e6c6034-7a03-4d90-b22a-07965a537932"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"9516d0fc-7776-4283-8e75-c9dcabde5493","linkId":"9516d0fc-7776-4283-8e75-c9dcabde5493","name":"Inventario","folder":null,"paths":{"en":"inventory","default":"inventory"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"a17e74a1-9672-46b8-92cc-ee374388e425","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"37c3bf0b-e88f-424c-88c9-928cd6369812","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"4488f068-e908-4591-8f93-6e820fbe4e92","sectionTitle":"Content","linkId":"d9a2a5c6-0091-404c-8860-cc25b6f6cd78"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"3feae10c-e4cf-4d4c-9ed8-b0aedbef18ce","linkId":"3feae10c-e4cf-4d4c-9ed8-b0aedbef18ce","name":"Configuraciones","folder":null,"paths":{"en":"settings","default":"settings"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"37c3bf0b-e88f-424c-88c9-928cd6369812","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"a17e74a1-9672-46b8-92cc-ee374388e425","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"704e8ad6-2d9d-4dcd-9a71-03c0a53cb872","sectionTitle":"Content","linkId":"da50435c-594c-4c49-9959-baa9f60af409"}],"pageUserGroups":[{}],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"d55fe13e-261f-4e98-8cbe-4e5db94230c8","linkId":"d55fe13e-261f-4e98-8cbe-4e5db94230c8","name":"Pedidos","folder":null,"paths":{"en":"orders","default":"orders"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"a17e74a1-9672-46b8-92cc-ee374388e425","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"37c3bf0b-e88f-424c-88c9-928cd6369812","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"4488f068-e908-4591-8f93-6e820fbe4e92","sectionTitle":"Content","linkId":"d9a2a5c6-0091-404c-8860-cc25b6f6cd78"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"0c403afe-5c1f-4576-847e-89252d5db7be","linkId":"0c403afe-5c1f-4576-847e-89252d5db7be","name":"Roles","folder":null,"paths":{"en":"rols","default":"rols"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"a17e74a1-9672-46b8-92cc-ee374388e425","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"37c3bf0b-e88f-424c-88c9-928cd6369812","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"3fcb8b59-c085-4e63-8cf1-f97934ed1cc7","sectionTitle":"Content","linkId":"6271a9ca-81dc-4105-8a94-44087979973f"},{"uid":"24cca746-0d66-4679-bccc-602c8943d231","sectionTitle":"Modal","linkId":"b473a8bc-ea8b-47bf-9895-8fb6f79c5164"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"fe51eb60-cd78-469a-90df-b680d7a030f5","linkId":"fe51eb60-cd78-469a-90df-b680d7a030f5","name":"Cartera","folder":null,"paths":{"en":"cartera","default":"cartera"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"37c3bf0b-e88f-424c-88c9-928cd6369812","sectionTitle":"Sidemenu","linkId":"60e1581e-2cd1-4253-b90a-10887834383c"},{"uid":"a17e74a1-9672-46b8-92cc-ee374388e425","sectionTitle":"Header","linkId":"f3b431a9-d5be-4522-a14f-ed81e619a727"},{"uid":"dd4a3e79-5342-45e6-8056-f9a2c4322f00","sectionTitle":"Content","linkId":"f68cb9f6-bdea-4e51-a290-ebd9adb35696"}],"pageUserGroups":[{},{"userGroup":{"id":"b0978cd6-83e7-4ecb-9fc2-7e520dbd2977","roles":[{"value":"admin"}]}}],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"66a79c98-70e7-4bc4-8859-20776b024ec2","name":"PWA","namespace":"pwa"},{"id":"69d4a5bb-09a3-4f3d-a94e-667c21c057eb","name":"NPM","namespace":"npm"},{"id":"e93a2dfd-9b19-473e-b445-c666fed4e14a","name":"Auth0","namespace":"auth0"},{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 71;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
