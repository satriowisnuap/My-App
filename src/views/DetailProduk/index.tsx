import { ProductType } from "@/types/Products.type";
import styles from "./detailProduk.module.scss";
import Link from "next/link";

const DetailProduk = ({ products }: { products: ProductType }) => {
  return (
    <div className={styles.wrapper}>
      {/* HEADER */}
      <div className={styles.header}>
        <h1 className={styles.title}>Detail Produk</h1>
      </div>

      {/* CARD */}
      <div className={styles.produkdetail}>
        <div className={styles.produkdetail__image}>
          <img src={products.image} alt={products.name} />
        </div>

        <div className={styles.produkdetail__info}>
          <h1 className={styles.produkdetail__name}>{products.name}</h1>

          <p className={styles.produkdetail__category}>{products.category}</p>

          <p className={styles.produkdetail__price}>
            Rp {products.price?.toLocaleString("id-ID")}
          </p>

          <Link href="/produk" className={styles.produkdetail__back}>
            ← Kembali
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailProduk;
