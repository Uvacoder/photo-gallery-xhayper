import { FC, useState, ReactElement } from "react";
import type { StaticImageData } from "next/image";
import { useDisclosure } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/tooltip";
import Image from 'next/future/image';
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/modal"
import {
    SimpleGrid,
    Divider,
    Text,
    Box,
} from "@chakra-ui/layout";

// Next Image: 30

// god save my life
import img0 from "../../public/gallery/hayper/IMG_0497_EDITED.png";
import img1 from "../../public/gallery/hayper/hayper_wolf.png";
import img2 from "../../public/gallery/hayper/WOOOO.png";
import img3 from "../../public/gallery/hayper/Untitled1831_20220816162333.png";
import img4 from "../../public/gallery/hayper/com.png";
import img5 from "../../public/gallery/hayper/WolfMan.png";
import img29 from "../../public/gallery/hayper/PURPLEE.png";

import img6 from "../../public/gallery/old_hayper/headshot_transparent.png";
import img7 from "../../public/gallery/old_hayper/Untitled1883_20210904174428.png";
import img8 from "../../public/gallery/old_hayper/Untitled453_20210515144557.png";
import img9 from "../../public/gallery/old_hayper/sketch-1593639014980.png";
import img10 from "../../public/gallery/old_hayper/sketch-1593477463861.png";
import img11 from "../../public/gallery/old_hayper/sketch-1593360442075.png";
import img12 from "../../public/gallery/old_hayper/Screenshot_20211006-031117_FlipaClip.jpg";
import img13 from "../../public/gallery/old_hayper/Screenshot_2652.png";
import img14 from "../../public/gallery/old_hayper/Maid_Hayper.png";
import img15 from "../../public/gallery/old_hayper/hayper(1).png";
import img16 from "../../public/gallery/old_hayper/hayper_socc_blep.png";
import img17 from "../../public/gallery/old_hayper/Hayper_Portrait.png";
import img18 from "../../public/gallery/old_hayper/haykat.png";
import img19 from "../../public/gallery/old_hayper/hayden.gif";
import img20 from "../../public/gallery/old_hayper/Goat.png";
import img21 from "../../public/gallery/old_hayper/femmaid hayper.png";
import img22 from "../../public/gallery/old_hayper/20210630_002512.png";
import img23 from "../../public/gallery/old_hayper/20201031_141531.png";
import img24 from "../../public/gallery/old_hayper/20201006_230127.jpg";
import img25 from "../../public/gallery/old_hayper/1837_20220726235537.png";
import img26 from "../../public/gallery/old_hayper/1037_Sem_Titulo.png";
import img27 from "../../public/gallery/old_hayper/472_Sem_Titulo-1.jpg";

import img28 from "../../public/gallery/other/Untitled56_20220918142849.png";

////////////////////

const img0_url = "/gallery/hayper/IMG_0497_EDITED.png";
const img1_url = "/gallery/hayper/hayper_wolf.png";
const img2_url = "/gallery/hayper/WOOOO.png";
const img3_url = "/gallery/hayper/Untitled1831_20220816162333.png";
const img4_url = "/gallery/hayper/com.png";
const img5_url = "/gallery/hayper/WolfMan.png";
const img29_url = "/gallery/hayper/PURPLEE.png";

const img6_url = "/gallery/old_hayper/headshot_transparent.png";
const img7_url = "/gallery/old_hayper/Untitled1883_20210904174428.png";
const img8_url = "/gallery/old_hayper/Untitled453_20210515144557.png";
const img9_url = "/gallery/old_hayper/sketch-1593639014980.png";
const img10_url = "/gallery/old_hayper/sketch-1593477463861.png";
const img11_url = "/gallery/old_hayper/sketch-1593360442075.png";
const img12_url = "/gallery/old_hayper/Screenshot_20211006-031117_FlipaClip.jpg";
const img13_url = "/gallery/old_hayper/Screenshot_2652.png";
const img14_url = "/gallery/old_hayper/Maid_Hayper.png";
const img15_url = "/gallery/old_hayper/hayper(1).png";
const img16_url = "/gallery/old_hayper/hayper_socc_blep.png";
const img17_url = "/gallery/old_hayper/Hayper_Portrait.png";
const img18_url = "/gallery/old_hayper/haykat.png";
const img19_url = "/gallery/old_hayper/hayden.gif";
const img20_url = "/gallery/old_hayper/Goat.png";
const img21_url = "/gallery/old_hayper/femmaid hayper.png";
const img22_url = "/gallery/old_hayper/20210630_002512.png";
const img23_url = "/gallery/old_hayper/20201031_141531.png";
const img24_url = "/gallery/old_hayper/20201006_230127.jpg";
const img25_url = "/gallery/old_hayper/1837_20220726235537.png";
const img26_url = "/gallery/old_hayper/1037_Sem_Titulo.png";
const img27_url = "/gallery/old_hayper/472_Sem_Titulo-1.jpg";

const img28_url = "/gallery/other/Untitled56_20220918142849.png";

const useURLForImage = true;

export type ImageObject = {
    imageData: StaticImageData | string;
    alt?: string;
    tooltip?: string;
};

const galleryData: ImageObject[][] = [
    [
        {
            imageData: useURLForImage ? img0_url : img0,
            tooltip: "First art of my new main sona ever, edited to add the height"
        },
        {
            imageData: useURLForImage ? img1_url : img1
        },
        {
            imageData: useURLForImage ? img2_url : img2,
            tooltip: "My friend comissioned this for me, i added VSC to the computer screen"
        },
        {
            imageData: useURLForImage ? img3_url : img3
        },
        {
            imageData: useURLForImage ? img4_url : img4,
            tooltip: "Changed moderator's group image"
        },
        {
            imageData: useURLForImage ? img5_url : img5,
        },
        {
            imageData: useURLForImage ? img29_url : img29,
            tooltip: "*INHALES* PURPLEEEEEEEEEE"
        }
    ],
    [
        {
            imageData: useURLForImage ? img6_url : img6,
            tooltip: "My old main fursona, a black cat"
        },
        {
            imageData: useURLForImage ? img7_url : img7
        },
        {
            imageData: useURLForImage ? img8_url : img8
        },
        {
            imageData: useURLForImage ? img9_url : img9
        },
        {
            imageData: useURLForImage ? img10_url : img10
        },
        {
            imageData: useURLForImage ? img11_url : img11
        },
        {
            imageData: useURLForImage ? img12_url : img12
        },
        {
            imageData: useURLForImage ? img13_url : img13
        },
        {
            imageData: useURLForImage ? img14_url : img14
        },
        {
            imageData: useURLForImage ? img15_url : img15
        },
        {
            imageData: useURLForImage ? img16_url : img16
        },
        {
            imageData: useURLForImage ? img17_url : img17
        },
        {
            imageData: useURLForImage ? img18_url : img18
        },
        {
            imageData: useURLForImage ? img19_url : img19
        },
        {
            imageData: useURLForImage ? img20_url : img20
        },
        {
            imageData: useURLForImage ? img21_url : img21
        },
        {
            imageData: useURLForImage ? img22_url : img22
        },
        {
            imageData: useURLForImage ? img23_url : img23
        },
        {
            imageData: useURLForImage ? img24_url : img24
        },
        {
            imageData: useURLForImage ? img25_url : img25
        },
        {
            imageData: useURLForImage ? img26_url : img26
        },
        {
            imageData: useURLForImage ? img27_url : img27
        }
    ],
    [
        {
            imageData: useURLForImage ? img28_url : img28,
            tooltip: "Circle in a maid dress"
        }
    ]
];

const ConditionalWrapper: FC<{
    condition: boolean;
    wrapper: (children: ReactElement) => ReactElement;
    children: ReactElement;
}> = ({
    condition,
    wrapper,
    children
}) => condition ? wrapper(children) : children;

export default function Gallery() {
    const [currentImage, setCurrentImage] = useState<ImageObject | null>(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            {galleryData.map((gridRow, gridIndex, gridArr) => (
                <div key={`grid-${gridIndex}`}>
                    <SimpleGrid
                        minChildWidth={"15rem"}
                        gap="1rem"
                        mt="1rem"
                        mb={gridIndex == gridArr.length - 1 ? "1rem" : ""}
                        mx="1rem"
                        h="fit-content"
                    >
                        {gridRow.map((image, imageIndex) => {
                            return (
                                <div key={`image-${gridIndex}-${imageIndex}`}>
                                    <ConditionalWrapper
                                        condition={image.tooltip != null}
                                        wrapper={(children) => <Tooltip label={image.tooltip}>{children}</Tooltip>}
                                    >
                                        <Box boxSize={"15rem"}>
                                            <Image
                                                src={image.imageData}
                                                alt={image.alt ?? ""}
                                                width={typeof (image.imageData) == "string" ? 240 : image.imageData.width}
                                                height={typeof (image.imageData) == "string" ? 240 : image.imageData.height}
                                                placeholder={typeof (image.imageData) != "string" && image.imageData.blurDataURL ? "blur" : "empty"}
                                                style={{ objectFit: "scale-down", minWidth: "15rem", minHeight: "15rem", maxWidth: "15rem", maxHeight: "15rem", cursor: "pointer" }}
                                                onClick={() => {
                                                    setCurrentImage(image);
                                                    onOpen();
                                                }}
                                            />
                                        </Box>
                                    </ConditionalWrapper>
                                </div>
                            );
                        })}
                    </SimpleGrid>
                    {gridIndex !== gridArr.length - 1 && <Divider orientation="horizontal" mt={"1rem"} />}
                </div>
            ))}

            {currentImage != null && (
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Image</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody mb={"0.5rem"}>
                            {currentImage!.tooltip != null && <Text mb="1rem">{currentImage!.tooltip}</Text>}
                            <Image
                                src={currentImage!.imageData}
                                alt={currentImage!.alt ?? ""}
                                width={typeof (currentImage!.imageData) == "string" ? 0 : currentImage!.imageData.width}
                                height={typeof (currentImage!.imageData) == "string" ? 0 : currentImage!.imageData.height}
                                style={{ minWidth: "100%", minHeight: "100%" }}
                                placeholder={typeof (currentImage!.imageData) != "string" && currentImage!.imageData.blurDataURL ? "blur" : "empty"}
                                quality={100}
                                priority={true}
                            />
                        </ModalBody>
                    </ModalContent>
                </Modal>
            )}
        </>
    );
}
