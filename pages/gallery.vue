<script setup lang="ts">
const isDark = useDark();

type ImageObject = {
    src: string;
    alt?: string;
    tooltip?: string;
};

const galleryData: ImageObject[][] = [
    [
        {
            src: "/gallery/hayper/IMG_0497_EDITED.png",
            tooltip: "First art of my new main sona ever, edited to add the height"
        },
        {
            src: "/gallery/hayper/hayper_wolf.png"
        },
        {
            src: "/gallery/hayper/WOOOO.png",
            tooltip: "My friend comissioned this for me, i added VSC to the computer screen"
        },
        {
            src: "/gallery/hayper/Untitled1831_20220816162333.png"
        },
        {
            src: "/gallery/hayper/com.png",
            tooltip: "Changed moderator's group image"
        },
        {
            src: "/gallery/hayper/WolfMan.png"
        },
        {
            src: "/gallery/hayper/PURPLEE.png",
            tooltip: "*INHALES* PURPLEEEEEEEEEE"
        },
        {
            src: "/gallery/hayper/useruploads_bdd2411b-2ec6-4153-ab40-d7f28a5cf0b7_kofimissions9.png",
            tooltip: "I don't know what to say, this is also one of my most favorite art.... it's just..."
        }
    ],
    [
        {
            src: "/gallery/old_hayper/headshot_transparent.png",
            tooltip: "My old main fursona, a black cat"
        },
        {
            src: "/gallery/old_hayper/Untitled1883_20210904174428.png"
        },
        {
            src: "/gallery/old_hayper/Untitled453_20210515144557.png"
        },
        {
            src: "/gallery/old_hayper/sketch-1593639014980.png"
        },
        {
            src: "/gallery/old_hayper/sketch-1593477463861.png"
        },
        {
            src: "/gallery/old_hayper/sketch-1593360442075.png"
        },
        {
            src: "/gallery/old_hayper/Screenshot_20211006-031117_FlipaClip.jpg"
        },
        {
            src: "/gallery/old_hayper/Screenshot_2652.png"
        },
        {
            src: "/gallery/old_hayper/Maid_Hayper.png"
        },
        {
            src: "/gallery/old_hayper/hayper(1).png"
        },
        {
            src: "/gallery/old_hayper/hayper_socc_blep.png"
        },
        {
            src: "/gallery/old_hayper/Hayper_Portrait.png"
        },
        {
            src: "/gallery/old_hayper/haykat.png"
        },
        {
            src: "/gallery/old_hayper/hayden.gif"
        },
        {
            src: "/gallery/old_hayper/Goat.png"
        },
        {
            src: "/gallery/old_hayper/femmaid hayper.png"
        },
        {
            src: "/gallery/old_hayper/20210630_002512.png"
        },
        {
            src: "/gallery/old_hayper/20201031_141531.png"
        },
        {
            src: "/gallery/old_hayper/20201006_230127.jpg"
        },
        {
            src: "/gallery/old_hayper/1837_20220726235537.png"
        },
        {
            src: "/gallery/old_hayper/1037_Sem_Titulo.png"
        },
        {
            src: "/gallery/old_hayper/472_Sem_Titulo-1.jpg"
        }
    ],
    [
        {
            src: "/gallery/other/Untitled56_20220918142849.png",
            tooltip: "Circle in a maid dress"
        }
    ]
];

const modalData = ref({
    enabled: false,
    imageData: {}
} as {
    enabled: boolean;
    imageData?: ImageObject;
});
</script>

<template>
    <div>
        <b-container fluid>
            <b-container fluid v-for="(rowData, index) in galleryData" align-content="start">
                <b-row class="row-cols-auto gx-3 gy-3 mx-3 my-3">
                    <b-col align-self="center" v-for="imageData in rowData">
                        <b-img
                            :src="imageData.src"
                            :alt="imageData.alt"
                            width="256"
                            height="256"
                            style="object-fit: scale-down; max-width: 15rem; max-height: 15rem; cursor: pointer"
                            lazy
                            fluid
                            @click="
                                () => {
                                    modalData.imageData = imageData;
                                    modalData.enabled = !modalData.enabled;
                                }
                            "
                        />
                    </b-col>
                </b-row>
                <hr
                    class="border border-2"
                    :class="{ 'bg-light': isDark, 'bg-dark': !isDark }"
                    v-if="index != galleryData.length - 1"
                />
            </b-container>
        </b-container>

        <b-modal v-if="modalData.imageData != null" v-model="modalData.enabled" title="Image" hide-footer>
            <b-container class="mx-1 my-1">
                <p v-if="modalData.imageData.tooltip">{{ modalData.imageData.tooltip }}</p>
                <b-img
                    align-self="center"
                    :src="modalData.imageData.src"
                    :alt="modalData.imageData.alt"
                    style="object-fit: scale-down"
                    fluid
                />
            </b-container>
        </b-modal>
    </div>
</template>
