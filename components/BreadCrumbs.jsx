import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  Container,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const BreadCrumbs = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <Container
      p={".5rem"}
      pl={isLargerThan700 ? "3rem" : "initial"}
      bg="brand.600"
      zIndex={"1"}
      m={"auto"}
      mb={10}
      width={"100%"}
      color={"brand.100"}
      fontWeight={600}
      position="fixed"
      top={isLargerThan700 ? "4.2rem" : "3.7rem"}
      maxW={"unset"}
    >
      <Breadcrumb spacing="1rem" separator={"|"} w="100%">
        <BreadcrumbItem isCurrentPage>
          <Link href="/nationalIdCollection">
            <button className={styles.breadcrumbs}>Found ID card</button>
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <Link href="/nationalId">
            <button className={styles.breadcrumbs}>Lost ID card</button>
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </Container>
  );
};

export default BreadCrumbs;
