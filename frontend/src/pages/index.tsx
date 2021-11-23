import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  IconButton,
  ListItem,
  Stack,
  StackDivider,
  Text,
  UnorderedList,
  useBreakpointValue,
} from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ReactElement } from 'react';
import { BsLightningCharge } from 'react-icons/bs';
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';
import { GiCrownedHeart } from 'react-icons/gi';

export default function IndexPage() {
  return (
    <Container>
      <Stack
        as="main"
        minH="100vh"
        py={10}
        px={{ base: 6, md: 4 }}
        spacing={6}
        divider={
          <StackDivider
            h="2px"
            rounded="sm"
            bgGradient="linear(to-r, red.300, orange.300, yellow.300, green.300, blue.300, purple.300, pink.300)"
          />
        }
      >
        <Heading as="h1" fontSize="xl">
          Developer DAO
        </Heading>

        <Stack spacing={12}>
          <CurrentStatus />

          <Stack spacing={6}>
            <Heading as="h2" fontSize="lg">
              Mission
            </Heading>
            <Text>
              Developer DAO exists to accelerate the education and impact of a
              new wave of web3 builders.
            </Text>
          </Stack>

          <Stack spacing={6}>
            <Heading as="h2" fontSize="lg">
              Values
            </Heading>
            <UnorderedList spacing={3}>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  Transparency
                </Text>
                : open source everything, conversations in public, document and
                share journey
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  Diversity and Inclusion
                </Text>
                : seek to foster as diverse a membership as possible and support
                everyone to contribute
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  Responsibility
                </Text>
                : as a self-governed community we rely on members to be
                personally responsible for their actions and commitments to the
                community
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  Kindness and Empathy
                </Text>
                : we know that we are living in a complex, stressful, and
                diverse world and go out of our way to make people’s lives and
                days better through our interactions
              </ListItem>
            </UnorderedList>
          </Stack>

          <Stack spacing={6}>
            <Heading as="h2" fontSize="lg">
              Goals
            </Heading>
            <UnorderedList spacing={3}>
              <ListItem>
                Onboard, Educate, &amp; Support Web3 Developers
              </ListItem>
              <ListItem>
                Foster &amp; Build Web3 Tools &amp; Public Goods
              </ListItem>
            </UnorderedList>
          </Stack>
        </Stack>

        <HStack as="footer" justify="center">
          <SocialIconLink
            href="https://twitter.com/developer_dao"
            label="Twitter"
          >
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink href="https://discord.gg/devdao" label="Discord">
            <FaDiscord />
          </SocialIconLink>
          <SocialIconLink
            href="https://github.com/Developer-DAO"
            label="GitHub"
          >
            <FaGithub />
          </SocialIconLink>
        </HStack>
      </Stack>
    </Container>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const CurrentStatus = () => {
  const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });
  const iconSize = useBreakpointValue({ base: 16, md: 24 });

  return (
    <Stack
      as="aside"
      py={6}
      px={8}
      align={{ base: 'flex-start', md: 'center' }}
      direction={{ base: 'column', md: 'row' }}
      spacing={{ base: 5, md: 8 }}
      bg="gray.50"
      rounded="lg"
      color="gray.900"
    >
      <Icon as={GiCrownedHeart} boxSize={iconSize} />

      <Stack spacing={4}>
        <Stack>
          <Text fontSize="sm" fontWeight="bold">
            Current Status: Season 0
          </Text>
          <Text fontSize="xs">
            We&apos;re forming guilds, creating culture, strengthening our
            community, teaching &amp; learning, and building cool shit together.
          </Text>
        </Stack>
        <Box>
          <Button
            as="a"
            href="https://snapshot.org/#/devdao.eth/proposal/0x52fc76fe5865cf038b89b8c6ef78b6e691c0ab9c2b1228b84b0813b7832ce369"
            size={buttonSize}
            fontSize="xs"
            bg="gray.50"
            border="1px"
            borderStyle="dashed"
            borderColor="gray.900"
            _hover={{ bg: 'gray.100' }}
            _active={{ bg: 'gray.200' }}
            leftIcon={<BsLightningCharge />}
          >
            Read our Season 0 Snapshot
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

const SocialIconLink = ({
  children,
  href,
  label,
}: {
  children: ReactElement;
  href: string;
  label: string;
}) => {
  return (
    <IconButton
      as="a"
      aria-label={label}
      cursor="pointer"
      href={href}
      icon={children}
      size="lg"
      variant="ghost"
    />
  );
};
