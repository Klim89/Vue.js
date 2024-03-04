<template>
    <section class="project center">
        <ProjectCategories @activatedCategories="activeCategory" />
        <ProjectItems :projects="projects" />
    </section>
</template>

<script>
import ProjectCategories from './ProjectCategories.vue'
import ProjectItems from './ProjectItems.vue'
export default {
    components: {
        ProjectCategories,
        ProjectItems
    },
    name: 'ProjectMainContent',

    data() {
        return {
            projects: [],
            projectGroups: {
                projectOne: [
                    {
                        id: 1,
                        image: 'item_1.jpg',
                        title: 'Minimal Bedroom',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 2,
                        image: 'item_3.jpg',
                        title: 'Classic Minimal Bedroom',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 3,
                        image: 'item_5.jpg',
                        title: 'Minimal Bedroom table',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 4,
                        image: 'item_7.jpg',
                        title: 'Modern Bedroom',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 5,
                        image: 'item_2.jpg',
                        title: 'Minimal Bedroom',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 6,
                        image: 'item_4.jpg',
                        title: 'Modern Bedroom',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 7,
                        image: 'item_6.jpg',
                        title: 'System Table',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 8,
                        image: 'item_8.jpg',
                        title: 'Modern Bedroom',
                        text: 'Decor / Artchitecture'
                    }
                ],
                projectTwo: [
                    {
                        id: 1,
                        image: 'item_2.jpg',
                        title: 'Minimal Bedroom',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 2,
                        image: 'item_4.jpg',
                        title: 'Modern Bedroom',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 3,
                        image: 'item_6.jpg',
                        title: 'System Table',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 4,
                        image: 'item_8.jpg',
                        title: 'Modern Bedroom',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 5,
                        image: 'item_1.jpg',
                        title: 'Minimal Bedroom',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 6,
                        image: 'item_3.jpg',
                        title: 'Classic Minimal Bedroom',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 7,
                        image: 'item_5.jpg',
                        title: 'Minimal Bedroom table',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 8,
                        image: 'item_7.jpg',
                        title: 'Modern Bedroom',
                        text: 'Decor / Artchitecture'
                    }
                ],
                projectThree: [
                    {
                        id: 1,
                        image: 'item_5.jpg',
                        title: 'Minimal Bedroom table',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 2,
                        image: 'item_2.jpg',
                        title: 'Minimal Bedroom',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 3,
                        image: 'item_3.jpg',
                        title: 'Classic Minimal Bedroom',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 4,
                        image: 'item_4.jpg',
                        title: 'Modern Bedroom',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 5,
                        image: 'item_1.jpg',
                        title: 'Minimal Bedroom',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 6,
                        image: 'item_6.jpg',
                        title: 'System Table',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 7,
                        image: 'item_7.jpg',
                        title: 'Modern Bedroom',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 8,
                        image: 'item_8.jpg',
                        title: 'Modern Bedroom',
                        text: 'Decor / Artchitecture'
                    }
                ],
                projectFour: [
                    {
                        id: 1,
                        image: 'item_2.jpg',
                        title: 'Minimal Bedroom',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 2,
                        image: 'item_5.jpg',
                        title: 'Minimal Bedroom table',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 3,
                        image: 'item_4.jpg',
                        title: 'Modern Bedroom',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 4,
                        image: 'item_3.jpg',
                        title: 'Classic Minimal Bedroom',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 5,
                        image: 'item_6.jpg',
                        title: 'System Table',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 6,
                        image: 'item_1.jpg',
                        title: 'Minimal Bedroom',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 7,
                        image: 'item_8.jpg',
                        title: 'Modern Bedroom',
                        text: 'Decor / Artchitecture'
                    },
                    {
                        id: 8,
                        image: 'item_7.jpg',
                        title: 'Modern Bedroom',
                        text: 'Decor / Artchitecture'
                    }
                ]
            }
        }
    },

    created() {
        this.projects = this.projectGroups.projectOne
    },

    methods: {
        activeCategory(data) {
            switch (data.id) {
                case 1:
                    this.projects = this.projectGroups.projectTwo
                    break
                case 2:
                    this.projects = this.projectGroups.projectThree
                    break
                case 3:
                    this.projects = this.projectGroups.projectOne
                    break
                case 4:
                    this.projects = this.projectGroups.projectFour
                    break
            }
        }
    }
}
</script>
