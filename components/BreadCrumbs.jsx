import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from "@chakra-ui/react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const BreadCrumbs = () => {
  return (
    <Container>
      <Breadcrumb mb={5}>
        <BreadcrumbItem isCurrentPage>
          <Link href="/nationalIdCollection">
            <button className={styles.breadcrumbs}>Found an ID card</button>
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>
            <Link href="/nationalId">
              <button className={styles.breadcrumbs}>Lost an ID card</button>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Container>
  );
};

export default BreadCrumbs;
