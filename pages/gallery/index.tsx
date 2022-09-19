import { FC, useState, ReactElement } from "react";
import { StaticImageData } from "next/image";
import NextImage from 'next/future/image';
import {
    SimpleGrid,
    Tooltip,
    useDisclosure,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Divider,
    Text,
    Image,
    Box,
} from "@chakra-ui/react";

// god save my life
import img0 from "../../public/gallery/hayper/IMG_0497_EDITED.png";
import img1 from "../../public/gallery/hayper/hayper_wolf.png";
import img2 from "../../public/gallery/hayper/WOOOO.png";
import img3 from "../../public/gallery/hayper/Untitled1831_20220816162333.png";
import img4 from "../../public/gallery/hayper/com.png";
import img5 from "../../public/gallery/hayper/WolfMan.png";

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


export type ImageObject = {
    imageData: StaticImageData;
    alt?: string;
    tooltip?: string;
};

const galleryData: ImageObject[][] = [
    [
        {
            imageData: img0,
            tooltip: "First art of my new main sona ever, edited to add the height"
        },
        {
            imageData: img1
        },
        {
            imageData: img2,
            tooltip: "My friend comissioned this for me, i added VSC to the computer screen"
        },
        {
            imageData: img3
        },
        {
            imageData: img4,
            tooltip: "Changed moderator's group image"
        },
        {
            imageData: img5,
        }
    ],
    [
        {
            imageData: img6,
            tooltip: "My old main fursona, a black cat"
        },
        {
            imageData: img7
        },
        {
            imageData: img8
        },
        {
            imageData: img9
        },
        {
            imageData: img10
        },
        {
            imageData: img11
        },
        {
            imageData: img12
        },
        {
            imageData: img13
        },
        {
            imageData: img14
        },
        {
            imageData: img15
        },
        {
            imageData: img16
        },
        {
            imageData: img17
        },
        {
            imageData: img18
        },
        {
            imageData: img19
        },
        {
            imageData: img20
        },
        {
            imageData: img21
        },
        {
            imageData: img22
        },
        {
            imageData: img23
        },
        {
            imageData: img24
        },
        {
            imageData: img25
        },
        {
            imageData: img26
        },
        {
            imageData: img27
        }
    ],
    [
        {
            imageData: img28,
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
                                            <NextImage
                                                src={image.imageData}
                                                alt={image.alt ?? ""}
                                                placeholder={image.imageData.blurDataURL ? "blur" : "empty"}
                                                style={{ objectFit: "scale-down", maxWidth: "15rem", maxHeight: "15rem" }}
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
                            <NextImage
                                src={currentImage!.imageData}
                                alt={currentImage!.alt ?? ""}
                                placeholder={currentImage!.imageData.blurDataURL ? "blur" : "empty"}
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
