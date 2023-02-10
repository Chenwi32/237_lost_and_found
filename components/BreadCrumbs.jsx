import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, Container, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const BreadCrumbs = () => {

  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <Container
      maxW={'unset'}
      p={"1rem"}
      bg="brand.600"
      zIndex={2}
      mb={10}
      width={"100%"}
      color={"brand.100"}
      fontWeight={600}
      position="fixed"
      top={"3.7rem" }
    >
      <Breadcrumb maxW={1200} m='auto' spacing="1rem" separator={"|"} w='100%'>
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
