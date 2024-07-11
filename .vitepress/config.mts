import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'en-US',
    title: 'Resources for alt:V',
    description: 'Explore TypeScript resources, scripts and functions for alt:V',
    themeConfig: {
        search: {
            provider: 'local',
        },
        sidebar: [
            {
                text: 'Introduction',
                collapsed: false,
                items: [
                    { text: 'About', link: '/' },
                    { text: 'How can you contribute?', link: '/how-can-contribute' },
                ],
            },
            {
                text: 'Scripts',
                collapsed: false,
                items: [{ text: 'SOON' }],
            },
            {
                text: 'Resources',
                collapsed: false,
                items: [{ text: 'SOON' }],
            },
            {
                text: 'Tutorials',
                collapsed: false,
                items: [{ text: 'SOON' }],
            },
            {
                text: 'Functions',
                collapsed: false,
                items: [
                    {
                        text: 'Client',
                        items: [
                            {
                                text: 'Player Perspective',
                                link: '/functions/playerPerspective.md',
                            },
                            {
                                text: 'Ground Coords',
                                link: '/functions/groundCoords.md',
                            },
                            {
                                text: 'Camera Nearby Peds',
                                link: '/functions/camNearbyPeds.md',
                            },
                        ],
                    },
                    {
                        text: 'Server',
                        items: [{ text: 'SOON' }],
                    },
                ],
            },
        ],

        socialLinks: [{ icon: 'github', link: 'https://github.com/adriantandara/altv_docs' }],
    },
});
