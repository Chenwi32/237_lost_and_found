import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  Container,
} from "@chakra-ui/react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const BreadCrumbs = () => {
  return (

    
      
    <Container maxW={1200} p={0}  width={'100%'} color={"brand.100"} fontWeight={600}>
      <Breadcrumb spacing='8px' separator={'|'} mb={10} >
        <BreadcrumbItem isCurrentPage>
          <Link href="/nationalIdCollection">
            <button className={styles.breadcrumbs}>Found an ID card</button>
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <Link href="/nationalId">
            <button className={styles.breadcrumbs}>Lost an ID card</button>
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </Container>
  
    
  );
};

export default BreadCrumbs;
