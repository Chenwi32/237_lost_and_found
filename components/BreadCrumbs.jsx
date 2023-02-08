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

    
      
    <Container maxW={1200} p={'1rem 0'} bg='brand.600' zIndex={1}  mb={10} width={'100%'} color={"brand.100"} fontWeight={600} position='sticky' top={"3.7rem"}>
      <Breadcrumb spacing='1rem' separator={'|'} >
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
