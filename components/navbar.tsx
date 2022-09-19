// TODO: Rewrite this component

import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import RouteLink from "next/link";
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    useColorMode,
    Link
} from "@chakra-ui/react";

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box>
            <Flex
                bg={useColorModeValue("white", "gray.800")}
                color={useColorModeValue("gray.600", "white")}
                minH={"60px"}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.900")}
                align={"center"}
            >
                <Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={"ghost"}
                        aria-label={"Toggle Navigation"}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
                    <Text
                        textAlign={useBreakpointValue({ base: "center", md: "left" })}
                        fontFamily={"heading"}
                        color={useColorModeValue("gray.800", "white")}
                    >
                        Logo
                    </Text>

                    <Flex display={{ base: "none", md: "flex" }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack direction={"row"} spacing={7}>
                    <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");

    return (
        <Stack direction={"row"} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={"hover"} placement={"bottom-start"}>
                        <PopoverTrigger>
                            {navItem.link ? (
                                <RouteLink href={navItem.link}>
                                    <Link
                                        p={2}
                                        fontSize={"sm"}
                                        fontWeight={500}
                                        color={linkColor}
                                        _hover={{
                                            textDecoration: "none",
                                            color: linkHoverColor
                                        }}
                                    >
                                        {navItem.label}
                                    </Link>
                                </RouteLink>
                            ) : (
                                <Link
                                    p={2}
                                    fontSize={"sm"}
                                    fontWeight={500}
                                    color={linkColor}
                                    _hover={{
                                        textDecoration: "none",
                                        color: linkHoverColor
                                    }}
                                >
                                    {navItem.label}
                                </Link>
                            )}
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={"xl"}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={"xl"}
                                minW={"sm"}
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, link, subLabel }: NavItem) => {
    const hoverColor = useColorModeValue("pink.50", "gray.900");

    return (
        <>
            {link != null ? (
                <RouteLink href={link}>
                    <Link
                        role={"group"}
                        display={"block"}
                        p={2}
                        rounded={"md"}
                        _hover={{ bg: hoverColor }}
                    >
                        <Stack direction={"row"} align={"center"}>
                            <Box>
                                <Text transition={"all .3s ease"} _groupHover={{ color: "pink.400" }} fontWeight={500}>
                                    {label}
                                </Text>
                                <Text fontSize={"sm"}>{subLabel}</Text>
                            </Box>
                            <Flex
                                transition={"all .3s ease"}
                                transform={"translateX(-10px)"}
                                opacity={0}
                                _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
                                justify={"flex-end"}
                                align={"center"}
                                flex={1}
                            >
                                <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
                            </Flex>
                        </Stack>
                    </Link>
                </RouteLink>
            ) : (
                <Link
                    role={"group"}
                    display={"block"}
                    p={2}
                    rounded={"md"}
                    _hover={{ bg: hoverColor }}
                >
                    <Stack direction={"row"} align={"center"}>
                        <Box>
                            <Text transition={"all .3s ease"} _groupHover={{ color: "pink.400" }} fontWeight={500}>
                                {label}
                            </Text>
                            <Text fontSize={"sm"}>{subLabel}</Text>
                        </Box>
                        <Flex
                            transition={"all .3s ease"}
                            transform={"translateX(-10px)"}
                            opacity={0}
                            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
                            justify={"flex-end"}
                            align={"center"}
                            flex={1}
                        >
                            <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
                        </Flex>
                    </Stack>
                </Link>
            )}
        </>
    );
};

const MobileNav = () => {
    return (
        <Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ md: "none" }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, link }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    const textColor = useColorModeValue("gray.600", "gray.200");

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <>
                {link != null ? (
                    <RouteLink href={link}>
                        <Flex
                            py={2}
                            as={Link}
                            justify={"space-between"}
                            align={"center"}
                            _hover={{
                                textDecoration: "none"
                            }}
                        >
                            <Text fontWeight={600} color={textColor}>
                                {label}
                            </Text>
                            {children && (
                                <Icon
                                    as={ChevronDownIcon}
                                    transition={"all .25s ease-in-out"}
                                    transform={isOpen ? "rotate(180deg)" : ""}
                                    w={6}
                                    h={6}
                                />
                            )}
                        </Flex>
                    </RouteLink>
                ) : (
                    <Link
                        py={2}
                        as={Link}
                        justify={"space-between"}
                        align={"center"}
                        _hover={{
                            textDecoration: "none"
                        }}
                    >
                        <Text fontWeight={600} color={textColor}>
                            {label}
                        </Text>
                        {children && (
                            <Icon
                                as={ChevronDownIcon}
                                transition={"all .25s ease-in-out"}
                                transform={isOpen ? "rotate(180deg)" : ""}
                                w={6}
                                h={6}
                            />
                        )}
                    </Link>
                )}
            </>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={"solid"}
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                    align={"start"}
                >
                    {children &&
                        children.map((child) =>
                            child.link != null ? (
                                <RouteLink href={child.link} key={child.label}>
                                    <Link py={2}>{child.label}</Link>
                                </RouteLink>
                            ) : (
                                <Link key={child.label} py={2}>
                                    {child.label}
                                </Link>
                            )
                        )}
                </Stack>
            </Collapse>
        </Stack>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    link?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        link: "/"
    },
    {
        label: "About",
        link: "/about"
    },
    {
        label: "Gallery",
        link: "/gallery"
    }
];

console.log('You are going to see a lot of "(a) cannot appear as a descendant of (a)", Don\'t worry about it');
