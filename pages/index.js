import Head from "next/head";
import styles from "../styles/Home.module.css";
import { members } from "../datastore/members";

export default function Home() {
  return (
    <>
      <Head>
        <title>মহব্বতপুর সেন্ট পিটারস ক্লাব</title>
        <meta
          name="description"
          content="মহব্বতপুর সেন্ট পিটারস ক্লাব গোল্লা মিশন এবং গোল্লা মিশন যুব সংঘের আওতাভুক্ত একটি খ্রীষ্টান ক্লাব। এই ক্লাবের উৎপত্তি কাল ১৯৭৬ সালে হলেও প্রাথমিক ভাবে ক্লাবটির কার্যক্রম ও পরিচিতি ছিল সীমিত পরিসরে। মূলত ২০০০ সালের পর থেকে ক্লাবটি বিভিন্ন খেলাধুলা ও ম্যাগাজিনসহ বিভিন্ন সেবামূলক ও প্রতিযোগিতামূলক কার্যক্রমে অংশগ্রহণের মধ্য দিয়ে আঠারোগ্রামের মধ্যে একটি সফল ক্লাব হিসেবে নিজেদের নাম প্রতিষ্ঠিত করে।"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <main className={styles["page-wrapper"]}>
          <div className={styles["title-logo"]}>
            <img src="/assets/title-logo.png" alt="Logo" />
          </div>
          <div className={styles["title-member"]}>
            <img src="/assets/title-member.png" alt="Logo" />
          </div>
          <div className={styles["member-list"]}>
            {members.map((member, index) => (
              <div className={styles["member-item"]} key={index}>
                <div className={styles.thumbnail}>
                  <img
                    className={styles["member-image"]}
                    src={member.image}
                    width={150}
                    height={150}
                    alt={member.name}
                  />
                </div>
                <div className={styles["member-name"]}>{member.name}</div>
                <div className={styles["member-position"]}>
                  {member.position}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
