import { FC, useState } from "react";
import {
    SimpleGrid,
    Image,
    Tooltip,
    useDisclosure,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Divider,
    Text
} from "@chakra-ui/react";

export type ImageObject = {
    src: string;
    alt?: string;
    tooltip?: string;
};

const galleryData: ImageObject[][] = [
    [
        {
            src: new URL("/gallery/hayper/IMG_0497_EDITED.png", import.meta.url).href,
            tooltip: "The first art of my sona ever, edited to add the height"
        },
        {
            src: new URL("/gallery/hayper/hayper_wolf.png", import.meta.url).href
        },
        {
            src: new URL("/gallery/hayper/WOOOO.png", import.meta.url).href,
            tooltip: "My friend comissioned this for me, i added VSC to the computer screen"
        },
        {
            src: new URL("/gallery/hayper/Untitled1831_20220816162333.png", import.meta.url).href
        },
        {
            src: new URL("/gallery/hayper/com.png", import.meta.url).href,
            tooltip: "Changed moderator's group image"
        }
    ],
    [
        {
            src: new URL("/gallery/old_hayper/headshot_transparent.png", import.meta.url).href,
            tooltip: "My old main fursona, a black cat"
        },
        {
            src: new URL("/gallery/old_hayper/Untitled1883_20210904174428.png", import.meta.url).href
        },
        {
            src: new URL("/gallery/old_hayper/Untitled453_20210515144557.png", import.meta.url).href
        },
        {
            src: new URL("/gallery/old_hayper/sketch-1593639014980.png", import.meta.url).href
        },
        {
            src: new URL("/gallery/old_hayper/sketch-1593477463861.png", import.meta.url).href
        },
        {
            src: new URL("/gallery/old_hayper/sketch-1593360442075.png", import.meta.url).href
        },
        {
            src: new URL("/gallery/old_hayper/Screenshot_20211006-031117_FlipaClip.jpg", import.meta.url).href
        },
        {
            src: new URL("/gallery/old_hayper/Screenshot_2652.png", import.meta.url).href
        },
        {
            src: new URL("/gallery/old_hayper/Maid_Hayper.png", import.meta.url).href
        },
        {
            src: new URL("/gallery/old_hayper/hayper(1).png", import.meta.url).href
        },
        {
            src: new URL("/gallery/old_hayper/hayper_socc_blep.png", import.meta.url).href
        },
        {
            src: new URL("/gallery/old_hayper/Hayper_Portrait.png", import.meta.url).href
        },
        {
            src: new URL("/gallery/old_hayper/haykat.png", import.meta.url).href
        },
        {
            src: new URL("/gallery/old_hayper/hayden.gif", import.meta.url).href
        },
        {
            src: new URL("/gallery/old_hayper/Goat.png", import.meta.url).href
        },
        {
            src: new URL("/gallery/old_hayper/femmaid hayper.png", import.meta.url).href
        },
        {
            src: new URL("/gallery/old_hayper/20210630_002512.png", import.meta.url).href
        },
        {
            src: new URL("/gallery/old_hayper/20201031_141531.png", import.meta.url).href
        },
        {
            src: new URL("/gallery/old_hayper/20201006_230127.jpg", import.meta.url).href
        },
        {
            src: new URL("/gallery/old_hayper/1837_20220726235537.png", import.meta.url).href
        },
        {
            src: new URL("/gallery/old_hayper/1037_Sem_Titulo.png", import.meta.url).href
        },
        {
            src: new URL("/gallery/old_hayper/472_Sem_Titulo-1.jpg", import.meta.url).href
        }
    ]
];

const ConditionalWrapper: FC<{
    condition: boolean;
    wrapper: (children: any | any[]) => void;
    children: any | any;
}> = ({ condition, wrapper, children }) => (condition ? wrapper(children) : children);

export default function Gallery() {
    const [currentImage, setCurrentImage] = useState<ImageObject | null>(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            {galleryData.map((gridRow, gridIndex, gridArr) => (
                <div key={`grid-${gridIndex}`}>
                    <SimpleGrid minChildWidth={"15rem"} gap="1rem" mt="1rem" mx="1rem" h="fit-content">
                        {gridRow.map((image, imageIndex) => {
                            return (
                                <div key={`image-${gridIndex}-${imageIndex}`}>
                                    <ConditionalWrapper
                                        condition={image.tooltip != null}
                                        wrapper={(children: any) => <Tooltip label={image.tooltip}>{children}</Tooltip>}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            loading="lazy"
                                            objectFit={"scale-down"}
                                            boxSize={"15rem"}
                                            onClick={() => {
                                                setCurrentImage(image);
                                                onOpen();
                                            }}
                                            cursor={"pointer"}
                                        />
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
                            <Image src={currentImage!.src} loading="lazy" />
                        </ModalBody>
                    </ModalContent>
                </Modal>
            )}
        </>
    );
}
