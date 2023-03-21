INSERT INTO industry(industry_name) VALUES ('Information & Communication');
INSERT INTO industry(industry_name) VALUES ('Retail Trade');
INSERT INTO industry(industry_name) VALUES ('Banks');
INSERT INTO company (industry_id, company_name, image_url)
VALUES (1, '株式会社ラパウオレ・ア', 'assets/images/company/it_3.png');
INSERT INTO company (industry_id, company_name, image_url)
VALUES (1, '株式会社日立製作所', 'assets/images/company/hitachi.png');
INSERT INTO company (industry_id, company_name, image_url)
VALUES (1, '株式会社NSD', 'assets/images/company/it_1.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (2, '株式会社ファーストリテイリング', 'assets/images/company/retail_1.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (2, '株式会社セブン＆アイ・ホールディングス', 'assets/images/company/retail_3.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (2, 'イオン株式会社', 'assets/images/company/retail_2.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (3, '株式会社みずほ銀行', 'assets/images/company/bank_1.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (3, '株式会社三井住友銀行', 'assets/images/company/bank_2.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (3, '株式会社三菱ＵＦＪ銀行', 'assets/images/company/bank_3.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (1, 'Zホールディングス株式会社', 'assets/images/company/it_2.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (1, '株式会社エヌ・ティ・ティ・データ', 'assets/images/company/it_4.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (1, '株式会社大塚商会', 'assets/images/company/it_5.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (1, '株式会社野村総合研究所', 'assets/images/company/it_6.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (1, '伊藤忠テクノソリューションズ株式会社', 'assets/images/company/it_7.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (1, 'TIS株式会社', 'assets/images/company/it_8.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (2, '株式会社しまむら', 'assets/images/company/retail_4.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (2, '株式会社ニトリホールディングス', 'assets/images/company/retail_5.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (2, '株式会社スタートトゥデイ', 'assets/images/company/retail_6.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (2, '株式会社ファミリーマート', 'assets/images/company/retail_7.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (2, '株式会社良品計画', 'assets/images/company/retail_8.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (2, '株式会社ドン・キホーテ', 'assets/images/company/retail_9.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (3, '株式会社SBI新生銀行', 'assets/images/company/bank_4.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (3, '株式会社セブン銀行', 'assets/images/company/bank_5.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (3, 'トモニホールディングス株式会社', 'assets/images/company/bank_6.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (3, '株式会社トマト銀行', 'assets/images/company/bank_7.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (3, '株式会社八十二銀行', 'assets/images/company/bank_8.png');
INSERT INTO company (industry_id, company_name,  image_url)
VALUES (3, '株式会社横浜銀行', 'assets/images/company/bank_9.png');
INSERT INTO motto (company_id, phrase_1, phrase_2, phrase_3, date_created)
VALUES (1, '幸せ、平和  喜び、希望  終わりのない、永遠の', '社員、顧客が幸福で平和な日々をおくることができ', '喜び、希望、感謝に満ち溢れた会社であり続ける', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, date_created)
VALUES (2, '優れた自主技術・製品の開発を通じて、', '社会に貢献する', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, phrase_3, date_created)
VALUES (3, '社員一人ひとりの持つ無限の可能性を信じ、', '健全で働きやすい環境を提供し、', '夢と誇りを持てる働きがいのある会社にしていきます。', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, date_created)
VALUES (4, '服を変え、常識を変え、', '世界を変えていく', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, phrase_3, date_created)
VALUES (5, '私たちは、お客様に信頼される、誠実な企業でありたい。', '私たちは、取引先、株主、地域社会に信頼される、誠実な企業でありたい。', '私たちは、社員に信頼される、誠実な企業でありたい。', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, date_created)
VALUES (6, 'お客さまを原点に平和を追求し、人間を尊重し、地域社会に貢献する。', 'イオン（AEON）とは、ラテン語で「永遠」をあらわします。', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, date_created)
VALUES (7, '幅広いお客さまとともに持続的かつ安定的に成長し、', '内外の経済・社会の健全な発展にグループ一体となって貢献していく。', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, date_created)
VALUES (8, '最高の信頼を通じて、', 'お客さま・社会とともに発展するグローバルソリューションプロバイダー', NOW());
INSERT INTO motto (company_id, phrase_1, date_created)
VALUES (9, '世界が進むチカラになる。', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, date_created)
VALUES (10, '情報技術は、人々の可能性をどこまで解放することができるのか。', 'それは、私たちが探求する永遠のテーマです。', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, phrase_3, date_created)
VALUES (11, 'わたしたちは、「お客様のため」最善を尽くします', 'わたしたちは、「行動」し、「挑戦」します', 'わたしたちは、「活き活き」とした「明るい会社」をつくります', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, phrase_3, date_created)
VALUES (12, '人生は勝者に楽しく敗者には悲惨な道だ｡', '君も私も、お互いを信頼し、またその信頼に背かないことを誓おう。', '言い訳をするな｡創意工夫しよう。', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, date_created)
VALUES (13, '新しい社会のパラダイムを洞察し、その実現を担う', 'お客様の信頼を得て、お客様とともに栄える', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, date_created)
VALUES (14, '明日を変えるITの可能性に挑み、', '夢のある豊かな社会の実現に貢献する。', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, date_created)
VALUES (15, 'ムーバーとして、未来の景色に鮮やかな彩りを', 'ここに掲げた「ムーバー」とは、世の中を新しい世界へと動かしていくモノやコト、システムを生み出す人のことです。', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, phrase_3, date_created)
VALUES (16, '商業を通じ消費生活と生活文化の向上に貢献することを基本とする。', '常に最先端の商業、流通技術の運用によって高い生産性と適正な企業業績を維持する。', '世界的視野と人間尊重の経営を基本とし、普遍的な信用、信頼性をもつ誠実な企業運営を続ける。', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, date_created)
VALUES (17, '「ロマン」を原点に、', '「ビジョン」の実現をめざし続けます。', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, date_created)
VALUES (18, '世界中をカッコよく、', '世界中に笑顔を。', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, date_created)
VALUES (19, 'あなたと、コンビに、', 'ファミリーマート', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, date_created)
VALUES (20, '「人と自然とモノの望ましい関係と心豊かな人間社会」を考えた商品、サービス、店舗、活動を通じて', '感じ良い暮らしと社会」の実現に貢献する。', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, phrase_3, date_created)
VALUES (21, '高い志とモラルに裏づけられた、無私で真正直な商売に徹する', 'いつの時代も、ワクワク・ドキドキする、驚安商品がある買い場を構築する', '現場に大胆な権限委譲をはかり、常に適材適所を見直す', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, date_created)
VALUES (22, '安定した収益力を持ち、', '国内外産業経済の発展に貢献し、お客さまに求められる銀行グループ', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, phrase_3, date_created)
VALUES (23, '私たちは、お客さまに信頼される誠実な企業でありたい。', '私たちは、株主、お取引先、地域社会に信頼される誠実な企業でありたい。', '私たちは、社員に信頼される誠実な企業でありたい。', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, date_created)
VALUES (24, 'お客さま第一主義の経営を徹底し、', 'それぞれのお客さまのニーズに応じた最良の金融サービスを提供します。', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, phrase_3, date_created)
VALUES (25, '当社と取引するすべての関係者に経済的、文化的満足を提供する。', '新たな豊かさを求める生活者にふさわしい、適切な金融サービスと情報のメリットを提供する。', '変化する活動環境の中で、自らの限界に挑戦しようとする事業体の活動を多面的に支援する。', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, date_created)
VALUES (26, '健全経営を堅持し、', 'もって地域社会の発展に寄与する', NOW());
INSERT INTO motto (company_id, phrase_1, phrase_2, phrase_3, date_created)
VALUES (27, '地域の金融システムの担い手としての役割を認識し、', '活力あふれる人財の開発、育成を積極的におこない、', 'お客さま一人ひとりに最もふさわしい金融サービスの提供を通じ、地域に寄り添い皆さまから信頼される銀行をめざします。', NOW());