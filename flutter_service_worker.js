'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8acf08adca3dc4753c5180dbb36ccb80",
"assets/AssetManifest.bin.json": "c0a4f3af81d23bdd01f03f0af8795217",
"assets/AssetManifest.json": "9eac768488defdc2d6d9642467ec11c2",
"assets/assets/api-data.json": "1a3013e2ef573d5b3a7ba60212618704",
"assets/assets/Artificial%2520Intelligence/quizzes/AI_Applications.json": "34d41f49a77c660b1f1d62800a665c79",
"assets/assets/Artificial%2520Intelligence/quizzes/AI_Ethics_and_Governance.json": "39b4c42b49237d463396c381304b8ee5",
"assets/assets/Artificial%2520Intelligence/quizzes/AI_Fundamentals.json": "84774fc5c64a6096186c59b8a0f047c1",
"assets/assets/Artificial%2520Intelligence/quizzes/AI_Model_Deployment.json": "c6c34b2c5c7704c57bbfff94b455a3d5",
"assets/assets/Artificial%2520Intelligence/quizzes/AI_System_Design.json": "93df9e22213311d900b7948898609699",
"assets/assets/Artificial%2520Intelligence/quizzes/Computer_Vision.json": "359815565d5d9675ab70717c4a1ed625",
"assets/assets/Artificial%2520Intelligence/quizzes/Computer_Vision_AI.json": "74a9b63e63cfa6fa9b644d749f72d207",
"assets/assets/Artificial%2520Intelligence/quizzes/Future_of_AI.json": "57dcac4958ee2ef6aa37102bd0a49bea",
"assets/assets/Artificial%2520Intelligence/quizzes/Generative_AI.json": "028864a8927408771b2fd0e401c8d135",
"assets/assets/Artificial%2520Intelligence/quizzes/Natural_Language_Processing_AI.json": "8c7336b46243670f0790939751bb12ee",
"assets/assets/Artificial%2520Intelligence/quizzes/Neural_Networks.json": "e99a626e3685908d46607b5e6f6a680b",
"assets/assets/Blockchain/quizzes/Blockchain_Architecture.json": "ed8d9c905ebf34dfaaf7c8ea224b3c55",
"assets/assets/Blockchain/quizzes/Blockchain_Fundamentals.json": "7deeea3a81b6a49e823b2631c6dffc49",
"assets/assets/Blockchain/quizzes/Blockchain_Platforms.json": "a2d670cebd8ee7a5f23db4887d324733",
"assets/assets/Blockchain/quizzes/Blockchain_Use_Cases.json": "58fc67041d4af84c1cc20e836064c45a",
"assets/assets/Blockchain/quizzes/Consensus_Mechanisms.json": "e3cd40827f428ce9b13ba15be438b7a9",
"assets/assets/Blockchain/quizzes/Cryptography_and_Security.json": "128da554ab7ecee3453bfc736e7cef5e",
"assets/assets/Blockchain/quizzes/Decentralized_Applications.json": "45fba4caf9b031b1bdbee6af997bf5a1",
"assets/assets/Blockchain/quizzes/Future_of_Blockchain.json": "298fc986797f8019144b29f537e88a68",
"assets/assets/Blockchain/quizzes/Smart_Contracts.json": "b97e1afee6e0f392ea942ad5e699cf1b",
"assets/assets/Blockchain/quizzes/Web3_Development.json": "160894408474094dfefa38cf101f2a48",
"assets/assets/blog_data.json": "856b13ac77a2366ef380ee24ffa3de9b",
"assets/assets/Chess/quizzes/Advanced_Tactics.json": "6b7f0a9bf789d7a096b4e8d021637666",
"assets/assets/Chess/quizzes/Basic_Rules_and_Moves.json": "593a85f3ce5c8cc5f507fd5c49bff04b",
"assets/assets/Chess/quizzes/Board_Setup_and_Pieces.json": "252c6d4bb415fce0ee1406bcbc56f663",
"assets/assets/Chess/quizzes/Chess_Fundamentals.json": "1b03ce71ccf603e6576c4f007748c23f",
"assets/assets/Chess/quizzes/Chess_Psychology.json": "ff19cc64a96e7a3044a81ae4076c5d79",
"assets/assets/Chess/quizzes/End_Game_Techniques.json": "ead0bac571359e0148d9d358e6c22eb4",
"assets/assets/Chess/quizzes/Game_Analysis.json": "fdfec9c6abd4aabe0fef379d4f42bfdc",
"assets/assets/Chess/quizzes/Middle_Game_Strategies.json": "67e224523f9c4f8ef5b60bb3523e8842",
"assets/assets/Chess/quizzes/Opening_Principles.json": "676857616735a9ffa0234b2c58faba91",
"assets/assets/Chess/quizzes/Strategic_Planning.json": "4a98c6d4c4ec34fda54ed9591ef70544",
"assets/assets/Chess/quizzes/Tactical_Patterns.json": "c7b27d03ff42a13621de7e85436400fb",
"assets/assets/Chess/quizzes/Tournament_Play.json": "8c3e414989db54318b2edaa728c1d7a0",
"assets/assets/Cloud%2520Computing/quizzes/Cloud_Architecture_Design.json": "84a87c984cadf54ee23569df374237c1",
"assets/assets/Cloud%2520Computing/quizzes/Cloud_Cost_Management.json": "69f8dde85bb9961d12402c76ccbf33dc",
"assets/assets/Cloud%2520Computing/quizzes/Cloud_Deployment_Models.json": "b7bfd1c4a727a1e718e59bdfdf4906c1",
"assets/assets/Cloud%2520Computing/quizzes/Cloud_Fundamentals.json": "d61171d8ccef5ac5a85437a0172b6dee",
"assets/assets/Cloud%2520Computing/quizzes/Cloud_Infrastructure_Management.json": "dc8a8a4117da78d50c43d94afc0feae6",
"assets/assets/Cloud%2520Computing/quizzes/Cloud_Migration_and_Integration.json": "f73165ce4b9d52c44ff9b0607f14e67f",
"assets/assets/Cloud%2520Computing/quizzes/Cloud_Networking.json": "a637b753e2f77b8960b8bc2607ff1f1d",
"assets/assets/Cloud%2520Computing/quizzes/Cloud_Security_and_Compliance.json": "9b50a34a61928e50d71d709ec94f675c",
"assets/assets/Cloud%2520Computing/quizzes/Cloud_Service_Models.json": "dc664c77c6fdfa91b1490cbbed0fddc4",
"assets/assets/Cloud%2520Computing/quizzes/Cloud_Storage_Solutions.json": "b1cbabe084a03f0579daf77743324b65",
"assets/assets/Cloud%2520Computing/quizzes/Containerization_and_Orchestration.json": "48431f8865e1122e72d17172c11dc2d1",
"assets/assets/Cloud%2520Computing/quizzes/DevOps_in_Cloud.json": "f6a1212be3a74e46d081dbc376d32bac",
"assets/assets/Cloud%2520Computing/quizzes/Multi_Cloud_Strategies.json": "ef32b8755bcb8006fcb4fd9ec248a883",
"assets/assets/Cloud%2520Computing/quizzes/Serverless_Computing.json": "740552d0c170aa249bf2ef36d1a60409",
"assets/assets/course_images/Data%2520Analytics.jpeg": "d2dc1d4d45e2c928508423e0ecbbcbe8",
"assets/assets/course_images/Data%2520Science.jpeg": "d2dc1d4d45e2c928508423e0ecbbcbe8",
"assets/assets/course_images/Machine%2520Learning.jpeg": "613bce524f4f14aee60b44cae9768827",
"assets/assets/course_images/Numpy.jpeg": "d2dc1d4d45e2c928508423e0ecbbcbe8",
"assets/assets/course_images/Pandas.jpeg": "d2dc1d4d45e2c928508423e0ecbbcbe8",
"assets/assets/course_images/Python%2520Programming.jpeg": "6c494598df48fa5f7dfe710546f7e515",
"assets/assets/course_images/Web%2520Development.jpeg": "78aa7c20bc37430b846f12e47ef6505f",
"assets/assets/course_list.json": "552e1e71b5989140dc58f145deeeffb2",
"assets/assets/CSS/quizzes/css_advanced.json": "b3bc63f4631ab87f27aedadd1e35a4fc",
"assets/assets/CSS/quizzes/css_intro.json": "03cedb48e85858b9ed62c25fdcddff09",
"assets/assets/CSS/quizzes/css_responsive.json": "6ea93299d988f1bff74a04a978584464",
"assets/assets/Cybersecurity/quizzes/Application_Security.json": "93f6be6e3d168231dd5c0d28806f87d2",
"assets/assets/Cybersecurity/quizzes/Cloud_Security.json": "ed30e6192ddd1cb65ea39c40bb800071",
"assets/assets/Cybersecurity/quizzes/Cryptography.json": "1ab17ab8a99669588277c497c9fe09ae",
"assets/assets/Cybersecurity/quizzes/Ethical_Hacking.json": "31ff8d78288ae701f40b6edf95bd6006",
"assets/assets/Cybersecurity/quizzes/Incident_Response.json": "dd1049160ab063afe1554ea2f07238cc",
"assets/assets/Cybersecurity/quizzes/Network_Security.json": "344d4a8732cb64ef0b0f6e4457396d72",
"assets/assets/Cybersecurity/quizzes/Security_Compliance.json": "bbd4b563f20533427bfc18ad9ebb20f6",
"assets/assets/Cybersecurity/quizzes/Security_Fundamentals.json": "ccf07150abf0c73d7c08836b5154176e",
"assets/assets/Cybersecurity/quizzes/Security_Operations.json": "f98fde44cea537a6622a8a7589189086",
"assets/assets/Cybersecurity/quizzes/Threat_Intelligence.json": "617654fed667b9a2dd10f66238b60674",
"assets/assets/daily_plan.json": "327ce3be19abe07954ffcf0b67f92fc7",
"assets/assets/Data%2520Analytics/quizzes/Big_Data_Management_and_Analytics.json": "f166b001113d7d8bb2ceaa33dbe3bd04",
"assets/assets/Data%2520Analytics/quizzes/Data_Analytics_Lifecycle.json": "fef24a96cb37a0534a5d3a980588ce38",
"assets/assets/Data%2520Analytics/quizzes/Data_Quality_and_Governance.json": "475094daed7a8df74aba00260081e07d",
"assets/assets/Data%2520Analytics/quizzes/Data_Visualization_and_Communication.json": "ab1991c3dcec9331456abe913584be7d",
"assets/assets/Data%2520Analytics/quizzes/Data_Warehousing_and_ETL.json": "5b95086507f083be55375cc1b4a8f870",
"assets/assets/Data%2520Analytics/quizzes/Exploratory_Data_Analysis.json": "df9b45e02fedd1f884d4158121c97caa",
"assets/assets/Data%2520Analytics/quizzes/Predictive_Modeling_Techniques.json": "e73634485b699c43327b2264ea948138",
"assets/assets/Data%2520Analytics/quizzes/Statistical_Foundations_for_Analytics.json": "b5faaf6fdd66c34136286f23ddc90757",
"assets/assets/Data%2520Science/quizzes/Databases_and_Big_Data_Technologies.json": "17a61d9d6c0c193815d8e93e1f0c154e",
"assets/assets/Data%2520Science/quizzes/Data_Collection_and_Preparation.json": "1af620cc8f469bd080ba554c76f8e7ab",
"assets/assets/Data%2520Science/quizzes/Data_Mining_and_Data_Wrangling.json": "850f19f361c56d770dccf2d42adaba01",
"assets/assets/Data%2520Science/quizzes/Data_Science_Fundamentals.json": "039bcab87253b60f719995f2e58efa30",
"assets/assets/Data%2520Science/quizzes/Data_Visualization.json": "badafe53eaeeb85c4d6fc0653a68524e",
"assets/assets/Data%2520Science/quizzes/Deep_Learning.json": "4343d70ee3b6f085fdf987f5e5f00e38",
"assets/assets/Data%2520Science/quizzes/Domain_Specific_Applications.json": "965cb34a466af3519a0e3a6a8467ab58",
"assets/assets/Data%2520Science/quizzes/Ethics_and_Data_Privacy.json": "69a56177643c2b970036f0fdc138b536",
"assets/assets/Data%2520Science/quizzes/Exploratory_Data_Analysis.json": "746af656c3f37c461f2e588aed68b817",
"assets/assets/Data%2520Science/quizzes/Machine_Learning.json": "4c4c95ec598a3b507e12b5dcce053e0b",
"assets/assets/Data%2520Science/quizzes/Statistics_and_Probability.json": "c27e286f98a0a7e0a406d052e77b3c98",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Advanced_Data_Structures.json": "b8bc2ff471ad6ba759742b0740be85d6",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Algorithm_Analysis.json": "6e47bdaae8cb644ce38894074b577b20",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Algorithm_Design_Techniques.json": "91d8b8f490325c12c792a2fe90e96d86",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Basic_Data_Structures.json": "2b956eb22c385273526a0f484e4fdab8",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Competitive_Programming.json": "39b70d54203e5da82d1325cb6ba849f0",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Dynamic_Programming.json": "0d8875b2838be37df173315b9efb2ab4",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Graph_Algorithms.json": "12c04649de0c190d259c54a925c3d242",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Greedy_Algorithms.json": "dc7e027dec0164101bc132db5d0c2a33",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Interview_Preparation.json": "176d6d9d77e1001c43007ecb89da0fe2",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Problem_Solving_Strategies.json": "d8de9a7d1dc1b60e05b4958a560693c9",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Sorting_and_Searching.json": "6e51745e27873393106239b767c516ec",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Space_Time_Complexity.json": "acd446205804b2c83d75457ebe024304",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/String_Algorithms.json": "137cea95600edf464c1a71e1660ae716",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Tree_Algorithms.json": "f6fb4845cf91c90f1fdbdd1cffac3456",
"assets/assets/DevOps/quizzes/Cloud_DevOps.json": "2df467e9d9fc873479b4db8e626071fb",
"assets/assets/DevOps/quizzes/Configuration_Management.json": "b5d971624ae88a7dc49e933fc3329163",
"assets/assets/DevOps/quizzes/Continuous_Deployment.json": "c72ff914db5c7ac4e7b25c040985073a",
"assets/assets/DevOps/quizzes/Continuous_Integration.json": "aad0fc01fc5163c02fa2867cfce3e5d2",
"assets/assets/DevOps/quizzes/DevOps_Best_Practices.json": "0fd983501ad29f5c238005cd362773fb",
"assets/assets/DevOps/quizzes/DevOps_Fundamentals.json": "ed1c5956e25421ccf4298f52afd3f26e",
"assets/assets/DevOps/quizzes/DevOps_Security.json": "bd4abce2a273ff72fcad6333c5c1910a",
"assets/assets/DevOps/quizzes/DevOps_Tools_and_Automation.json": "c4855132b6052596734be8c0919ba25c",
"assets/assets/DevOps/quizzes/Infrastructure_as_Code.json": "46813a2e5f997d78ad2fbc7c38457faa",
"assets/assets/DevOps/quizzes/Monitoring_and_Logging.json": "570d1fe0ac3259210a83845a069228c2",
"assets/assets/Docker/quizzes/Container_Basics.json": "9e9f2a7fc45b4c709e9fd9c30d8e05fc",
"assets/assets/Docker/quizzes/Container_Lifecycle_Management.json": "72a1f94a9f55dad31be34ff66d668be7",
"assets/assets/Docker/quizzes/Dockerfile_and_Image_Creation.json": "ea52140308753e4b19da229d1d137d58",
"assets/assets/Docker/quizzes/Docker_Best_Practices.json": "e108717c77485847e2d2e2db65dd49b2",
"assets/assets/Docker/quizzes/Docker_Compose.json": "7c7a38a48839355cfa260cc32ca4b80a",
"assets/assets/Docker/quizzes/Docker_Fundamentals.json": "14589e59bcab996b0515d3c7744601db",
"assets/assets/Docker/quizzes/Docker_in_Production.json": "753136e3bf3187987e9bab3d931e7140",
"assets/assets/Docker/quizzes/Docker_Monitoring_and_Logging.json": "1336a6b94ecd773bd9e7f15b20f64067",
"assets/assets/Docker/quizzes/Docker_Networking.json": "46e1c4ab41e2421ef084f3865faaf35d",
"assets/assets/Docker/quizzes/Docker_Registry_and_Distribution.json": "e9e428fdaa9aa389ecfe32b07b9a79ce",
"assets/assets/Docker/quizzes/Docker_Security.json": "a14638c93572741c7a84a868c31a488e",
"assets/assets/Docker/quizzes/Docker_Storage_and_Volumes.json": "2dc7e23836553074d4798fd908621021",
"assets/assets/explore.json": "76c0c9f252c6e278bfe6ac4d9c953d78",
"assets/assets/faqs.json": "36105de58a4b1099557a83c2698c7bdf",
"assets/assets/files.js": "54de6aa1b2916ad825d2ddf7fed2e441",
"assets/assets/Git/quizzes/git_advanced.json": "22bae78087a31dbecc73a0ca90fb0227",
"assets/assets/Git/quizzes/git_branches.json": "ffc06f2061e8810f1f50cac70ee786c8",
"assets/assets/Git/quizzes/git_collaboration.json": "a801b2eb5ab0f2980e39916a9931016b",
"assets/assets/Git/quizzes/git_commands.json": "8607bdba6cb42b829987faafa64dd63e",
"assets/assets/Git/quizzes/git_deployment.json": "377e62dd6e87c898e1a8bf246fc5b9b0",
"assets/assets/Git/quizzes/git_intro.json": "dc1e9b2b1aa4a5decac5d966a20884b5",
"assets/assets/Git/quizzes/git_merging.json": "2810c16b05e8adc12ce93c92ce91d8fe",
"assets/assets/Git/quizzes/git_optimization.json": "1b3338322830c18f1d86991f3a671229",
"assets/assets/Git/quizzes/git_rebasing.json": "2066bafe6e52da2a07a2e36f658a3e95",
"assets/assets/Git/quizzes/git_repositories.json": "a8389e646468b1c75450b2bfb8bc5360",
"assets/assets/Git/quizzes/git_security.json": "7ea6ee9b6dc3ce09995b38d28cc3dc50",
"assets/assets/Git/quizzes/git_undoing_changes.json": "765caf5c2e36c00ae733a95347349eb7",
"assets/assets/HTML/quizzes/html_apis.json": "c45bd750ef0e4124303f934eb2ed0093",
"assets/assets/HTML/quizzes/html_forms.json": "ffb21c8b2eadaa0be642746df3ae51a2",
"assets/assets/HTML/quizzes/html_intro.json": "5da6997ee043011fcfd9d210e2de2ef0",
"assets/assets/HTML/quizzes/html_media.json": "042e415e5e2ea2dcc0eca97f3bdfeb02",
"assets/assets/Internet%2520of%2520Things/quizzes/Edge_Computing.json": "b67548e162b31525947fbd19d078a97c",
"assets/assets/Internet%2520of%2520Things/quizzes/Future_of_IoT.json": "5280d4ed9560d68999829e95e842861e",
"assets/assets/Internet%2520of%2520Things/quizzes/IoT_Applications.json": "67ed2c4b35e6cbd4ca39c0308d105b10",
"assets/assets/Internet%2520of%2520Things/quizzes/IoT_Architecture.json": "56a321159343989ea7a88bc0db67aa3d",
"assets/assets/Internet%2520of%2520Things/quizzes/IoT_Data_Analytics.json": "a645e7592e621d28e9bf4dbb2111e2d7",
"assets/assets/Internet%2520of%2520Things/quizzes/IoT_Fundamentals.json": "b3905696a5a049c134eecc97fba3d5d8",
"assets/assets/Internet%2520of%2520Things/quizzes/IoT_Platforms.json": "38fb334aa4ba0b716665e621d201f963",
"assets/assets/Internet%2520of%2520Things/quizzes/IoT_Protocols.json": "443b621baeaa7a0f6c3768b6d6edd57d",
"assets/assets/Internet%2520of%2520Things/quizzes/IoT_Security.json": "7287f5f0f18b1838308b53a97d18c4a1",
"assets/assets/Internet%2520of%2520Things/quizzes/Sensors_and_Actuators.json": "962bc76c947e83b15711ee560ea0cd4a",
"assets/assets/Javascript/quizzes/javascript_async.json": "13869f685860d00614f5a8dbb4bca2aa",
"assets/assets/Javascript/quizzes/javascript_bom.json": "ef12421f65c91ad7ed0b8ee055666153",
"assets/assets/Javascript/quizzes/javascript_intro.json": "fd2f91b1c96c0b8fea4209cc5fd73879",
"assets/assets/Javascript/quizzes/javascript_web_apis.json": "3830c442a541c88c32a5122fd5dec139",
"assets/assets/Keras/quizzes/Advanced_Keras_Topics.json": "a02158a86884d5af422601eb877ec581",
"assets/assets/Keras/quizzes/Convolutional_Neural_Networks.json": "11acbf09d12fbc5d471ceb03a9e172d2",
"assets/assets/Keras/quizzes/Generative_Adversarial_Networks.json": "565d3de9fd82cb9c93d44c5aef29f14d",
"assets/assets/Keras/quizzes/Introduction_to_Keras.json": "257fe4e1e599717c9246f46d78f71dc1",
"assets/assets/Keras/quizzes/Neural_Networks_with_Keras.json": "77877330cb4a6cecb48d1efd90e6671e",
"assets/assets/Keras/quizzes/Recurrent_Neural_Networks.json": "89d0d7ef393186a4484d734b4eb29b3b",
"assets/assets/Keras/quizzes/Transfer_Learning.json": "4902d08c9e816a8822312fef1d662259",
"assets/assets/Kubernetes/quizzes/Advanced_Kubernetes_Concepts.json": "5e01c76f4532cf2e84a1f0e1b89424d0",
"assets/assets/Kubernetes/quizzes/CI_CD_with_Kubernetes.json": "ec68de50ff44cf04333dc7f86b89777b",
"assets/assets/Kubernetes/quizzes/Cluster_Management.json": "cf140db938a76fac723fcfef91e53108",
"assets/assets/Kubernetes/quizzes/Configuration_and_Security.json": "de16e3861f5e80e5d0fd81cac3d6ee5c",
"assets/assets/Kubernetes/quizzes/Deployments_and_StatefulSets.json": "1af0b8303ad183363da73a3fa7faf3eb",
"assets/assets/Kubernetes/quizzes/Kubernetes_Architecture.json": "0b84af47b00a65476b8cb37956e7dcc4",
"assets/assets/Kubernetes/quizzes/Monitoring_and_Logging.json": "4ed0930802d82c4ce813afa6de406473",
"assets/assets/Kubernetes/quizzes/Pod_Lifecycle_and_Design.json": "bf5fee97174732d809da1ae22f5d5866",
"assets/assets/Kubernetes/quizzes/Resource_Management.json": "d1f2d55ec535f67f013f7ed7c142a7c4",
"assets/assets/Kubernetes/quizzes/Scaling_and_Performance.json": "71cf59ed27491336dea78b330b1b05f7",
"assets/assets/Kubernetes/quizzes/Services_and_Networking.json": "1e9b57567e722e97b40723961929a8d6",
"assets/assets/Kubernetes/quizzes/Storage_and_Persistence.json": "622c05c1871be21bb006fc6f2bc939f8",
"assets/assets/Linux/quizzes/linux_accessibility.json": "5b86699056a57fa125f52eb8271cafac",
"assets/assets/Linux/quizzes/linux_advanced.json": "2cd4f9be52ca9bd8d183cba7a9d43197",
"assets/assets/Linux/quizzes/linux_bash.json": "5340691c11ac42041d9e47de36398207",
"assets/assets/Linux/quizzes/linux_commands.json": "e8e0cb2728a8239703c3e9a39a442a8c",
"assets/assets/Linux/quizzes/linux_deployment.json": "742a747a9749ff7f2bc023ec3dc22413",
"assets/assets/Linux/quizzes/linux_intro.json": "12baefc337435a0e72e0eb73f40cce58",
"assets/assets/Linux/quizzes/linux_optimization.json": "8f08d1b4bd454400d2f209af07dca232",
"assets/assets/Linux/quizzes/linux_permissions.json": "30fca94993bf76d7316f4eadb5b7d6ca",
"assets/assets/Linux/quizzes/linux_scripts.json": "241abdff9182f61b74f5f1c14455374e",
"assets/assets/Linux/quizzes/linux_security.json": "9f7397f6b0d4cd6c0672990e1dc4d9ca",
"assets/assets/Linux/quizzes/linux_troubleshooting.json": "07864a8bf5869f8102a52b3dff34622c",
"assets/assets/Machine%2520Learning/quizzes/Advanced_Topics_in_ML.json": "9c9e679b9c3ac5515f9404561a16b435",
"assets/assets/Machine%2520Learning/quizzes/Computer_Vision.json": "4208d063d3fca1f0d6c3b3a690afab42",
"assets/assets/Machine%2520Learning/quizzes/Deep_Learning_Foundations.json": "f618ad0757d237af71df6e5b53cd9403",
"assets/assets/Machine%2520Learning/quizzes/Deployment_and_Productionization.json": "9190936a2855de65661ceefb49c79142",
"assets/assets/Machine%2520Learning/quizzes/Dimensionality_Reduction.json": "d4c99d8737e3aaa6089de7e2374b53dd",
"assets/assets/Machine%2520Learning/quizzes/Ethical_Considerations_in_ML.json": "3c85eb3a8579d8cbcae7cfbc4ae5ad7d",
"assets/assets/Machine%2520Learning/quizzes/Feature_Engineering_and_Selection.json": "064fc3be178de777e2129cd130a3d547",
"assets/assets/Machine%2520Learning/quizzes/Machine_Learning_Fundamentals.json": "1984347261dd2cb9a86a66bf58a672b4",
"assets/assets/Machine%2520Learning/quizzes/Model_Evaluation_and_Selection.json": "e23fe4bb52bf8c0a4ed1366454df7885",
"assets/assets/Machine%2520Learning/quizzes/Natural_Language_Processing.json": "e6fb82c1b2e35ce6b322c0441a9b2774",
"assets/assets/Machine%2520Learning/quizzes/Reinforcement_Learning.json": "caf80343f9c2746ee4e8238899fde52d",
"assets/assets/Machine%2520Learning/quizzes/Supervised_Learning.json": "3628c594f08e69cd0dde05ec84862091",
"assets/assets/Machine%2520Learning/quizzes/Time_Series_Analysis.json": "4a960c414c249102c813279268cc29b7",
"assets/assets/Machine%2520Learning/quizzes/Unsupervised_Learning.json": "e436161f31a63c5dfdae3d2e274fb777",
"assets/assets/Matplotlib/quizzes/3D_Plotting.json": "40d4aa991ee4fd77bd6ea2e1e5354366",
"assets/assets/Matplotlib/quizzes/Advanced_Plotting.json": "ac765a94f8ad6a6c2c761a9775977a9d",
"assets/assets/Matplotlib/quizzes/Advanced_Topics.json": "13d49244240600da945c19854ffd1b21",
"assets/assets/Matplotlib/quizzes/Animations_and_Interactivity.json": "626a928c7f0fd91fef178c6a2a41a33f",
"assets/assets/Matplotlib/quizzes/Creating_Plots.json": "bfe5fff8a6ac48cee410c30a4607d107",
"assets/assets/Matplotlib/quizzes/Customizing_Plots.json": "98c96b876e2f1cfff4ec0710f53d3146",
"assets/assets/Matplotlib/quizzes/Introduction_to_Matplotlib.json": "21efa224dcbe9483ce2825b64dd3e223",
"assets/assets/Matplotlib/quizzes/Plotting_Data.json": "6944332b2845ce5245d3a0bc7bfd35c7",
"assets/assets/Matplotlib/quizzes/Subplots_and_Figures.json": "5107073dd1f718dfb0e9c4c26a3cf1aa",
"assets/assets/mentors.json": "f1a14c41eb74b267251802ecafb62a85",
"assets/assets/ML%2520OPS/quizzes/Dimensionality_Reduction.json": "ee8a13b7f388bf54c8dc6f58c4da8187",
"assets/assets/ML%2520OPS/quizzes/Feature_Engineering_and_Selection.json": "49adeeaaaf94c4d1674ba8c312b2da40",
"assets/assets/ML%2520OPS/quizzes/Model_Deployment.json": "f2511060e526cfcba38454f2fd242d70",
"assets/assets/ML%2520OPS/quizzes/Model_Evaluation_and_Selection.json": "fa79ce05d67e430e4933c80ea991642f",
"assets/assets/ML%2520OPS/quizzes/Model_Explainability.json": "de60c6d5f060881709d010d87780b64f",
"assets/assets/ML%2520OPS/quizzes/Model_Interpretability.json": "c94e4655e8e086646d7c9882753a7487",
"assets/assets/ML%2520OPS/quizzes/Model_Monitoring.json": "7e2c42237cf3f20c5bf5b68aaa801478",
"assets/assets/ML%2520OPS/quizzes/Model_Validation.json": "868d039ae58e577d6a45fe1fbbb05fe8",
"assets/assets/NodeJs/quizzes/node_advanced.json": "fd47c4e3cdb926af389f164bf6eb4d89",
"assets/assets/NodeJs/quizzes/node_apis.json": "e1e25ad83db57cf4a3d2bbe2f213ea16",
"assets/assets/NodeJs/quizzes/node_architecture.json": "5f791ddc3ce94dd750499a2492314d96",
"assets/assets/NodeJs/quizzes/node_cloud.json": "31049628110deb11175f38e8116d9e12",
"assets/assets/NodeJs/quizzes/node_deployment.json": "fd982c11c2d3c23ae7b645d51d4f419c",
"assets/assets/NodeJs/quizzes/node_express.json": "5a34145d1e075bb6287ac8bc1adc716d",
"assets/assets/NodeJs/quizzes/node_intro.json": "4bffbaa7dd5ffac77ff4e1a7edd95d41",
"assets/assets/NodeJs/quizzes/node_mongodb.json": "9fb7bbbfa6d12bad1fe42e38d70126d7",
"assets/assets/NodeJs/quizzes/node_performance.json": "d4b8d80e09055de1113d67aaa13ad5ae",
"assets/assets/NodeJs/quizzes/node_security.json": "1654a8c1281a1c5f5606503d6d63616f",
"assets/assets/NodeJs/quizzes/node_testing.json": "74f22959dca0238b6d93d131a3b0307b",
"assets/assets/Numpy/quizzes/Advanced_Topics.json": "58feacb81e7d03c678691c8fcdad188a",
"assets/assets/Numpy/quizzes/Array_Indexing_and_Slicing.json": "416b30b27f81d7ad90e0b92aa2bbab01",
"assets/assets/Numpy/quizzes/Array_Manipulation.json": "cd56bea9d4d773c90f2b54f5233ffc91",
"assets/assets/Numpy/quizzes/Basic_Array_Operations.json": "eb662f20d494374ec417ed9f91c0bf47",
"assets/assets/Numpy/quizzes/Broadcasting.json": "2e311c888a6a59e1c14623b7b7911847",
"assets/assets/Numpy/quizzes/Creating_NumPy_Arrays.json": "a9841318b0d17012650948f279ed33dc",
"assets/assets/Numpy/quizzes/Introduction_to_NumPy.json": "08ecb83c5948dbb7a7aaf6519a737d4b",
"assets/assets/Numpy/quizzes/Mathematical_Functions.json": "893a77f50f15ce1aec8ceea9e1ca76b1",
"assets/assets/Numpy/quizzes/Working_with_Files.json": "9cd4ed8d582b8e580a7d784b8c1598f7",
"assets/assets/Pandas/quizzes/Creating_and_Reading_Data.json": "872ff421c42e6b369f74a9a70c814716",
"assets/assets/Pandas/quizzes/Data_Aggregation_and_Grouping.json": "19e6ee0953671524659e09a6364d5af2",
"assets/assets/Pandas/quizzes/Data_Cleaning.json": "0b4cfeab0160216a70143a6d5fe730b0",
"assets/assets/Pandas/quizzes/Data_Exploration.json": "d1520c43c2426fd9bb21b91770c7069d",
"assets/assets/Pandas/quizzes/Data_Manipulation.json": "f530bc54e05eadb29ed70659b23dfe78",
"assets/assets/Pandas/quizzes/Data_Visualization.json": "b2ab1e7f0c12e93f38b42392e02727bc",
"assets/assets/Pandas/quizzes/Introduction_to_Pandas.json": "b4ecc782d6df54a22b9fc85aacf266b8",
"assets/assets/Pandas/quizzes/Merging_and_Joining_Data.json": "e39dc076e65790eaeea7c33576823bda",
"assets/assets/Pandas/quizzes/Time_Series_Data.json": "e3e682d449eb4b85c869f8489a9bd263",
"assets/assets/Personality%2520Development/quizzes/Communication_Skills.json": "fddeb05a7693183fdf74aa8a1ed36de1",
"assets/assets/Personality%2520Development/quizzes/Conflict_Resolution.json": "f44ed1eb6e26b795a657494721e24f4a",
"assets/assets/Personality%2520Development/quizzes/Emotional_Intelligence.json": "a182a74d8b9cdb315637e47509a1beb4",
"assets/assets/Personality%2520Development/quizzes/Goal_Setting_and_Achievement.json": "955245aa199c8b914155d4a7c8ebaf82",
"assets/assets/Personality%2520Development/quizzes/Leadership_Development.json": "127ed0b899c621daad8fd6c7a0a4c7b5",
"assets/assets/Personality%2520Development/quizzes/Networking_Skills.json": "b8149c59768d038152bcc6827438a7e4",
"assets/assets/Personality%2520Development/quizzes/Personal_Branding.json": "ea7da3a2fb30ad4c9040af120de0ad89",
"assets/assets/Personality%2520Development/quizzes/Professional_Etiquette.json": "b8943878533da7524b6aed0e5754204f",
"assets/assets/Personality%2520Development/quizzes/Public_Speaking.json": "88b25dba05e09e4c355ffa60d5b9eb33",
"assets/assets/Personality%2520Development/quizzes/Self_Awareness_and_Growth.json": "01025432c445071ebc87cbbc9a661858",
"assets/assets/Personality%2520Development/quizzes/Stress_Management.json": "442b713a3d91e9c80a8cda05f07a5bcd",
"assets/assets/Personality%2520Development/quizzes/Team_Building.json": "caee262895acf66593c8befbf8ec64cb",
"assets/assets/Personality%2520Development/quizzes/Time_Management.json": "b5bdad6fe0c7ae4df8acaed4896cdb0f",
"assets/assets/Personality%2520Development/quizzes/Work_Life_Balance.json": "5a6f666eb1107e355a92dd367bac318f",
"assets/assets/Power%2520BI/quizzes/Advanced_Power_BI_Topics.json": "933e800313d661a8573fd11004862388",
"assets/assets/Power%2520BI/quizzes/Data_Integration_and_Connections.json": "9b809d06fb37d55ca84f8f417997a223",
"assets/assets/Power%2520BI/quizzes/Data_Modeling_and_Design.json": "444aab51159686bb1dce4221c5ff9fc6",
"assets/assets/Power%2520BI/quizzes/Data_Transformations_and_Cleaning.json": "6cc340b5592716a5d3fe2b09fcc8f24b",
"assets/assets/Power%2520BI/quizzes/Data_Visualization.json": "428b17271bce352e66338b543daa805b",
"assets/assets/Power%2520BI/quizzes/Introduction_to_Power_BI.json": "c2465115d75cca0ac763be9c8668f217",
"assets/assets/Power%2520BI/quizzes/Reporting_and_Dashboarding.json": "5887f8c647285dedc7f8965fad14dafb",
"assets/assets/Prompt%2520Engineering/quizzes/Advanced_Prompting_Techniques.json": "2e88f294f8e93d666a45d1da6dc80f68",
"assets/assets/Prompt%2520Engineering/quizzes/Chain_of_Thought_Prompting.json": "0580612c0a45fd8b2c4b103e50c0485c",
"assets/assets/Prompt%2520Engineering/quizzes/Context_and_Instructions.json": "34bc2897fd2307382d11536007d58733",
"assets/assets/Prompt%2520Engineering/quizzes/Ethics_and_Best_Practices.json": "502cf2e3661fc99f8f5860cc6d5672d1",
"assets/assets/Prompt%2520Engineering/quizzes/Few_Shot_Learning.json": "e9dbdc1319d72501f9afa8db0b5f2403",
"assets/assets/Prompt%2520Engineering/quizzes/Fundamentals_of_Prompt_Engineering.json": "d4745807cb591399fcf06a80182077ee",
"assets/assets/Prompt%2520Engineering/quizzes/Output_Formatting_and_Control.json": "28f66c4949d6e241ef735f75cd5fefae",
"assets/assets/Prompt%2520Engineering/quizzes/Prompt_Design_Patterns.json": "5892584c007d6296473af4e7f4221684",
"assets/assets/Prompt%2520Engineering/quizzes/Prompt_Testing_and_Iteration.json": "e8b4320b4a59d13dbf2174420451813c",
"assets/assets/Prompt%2520Engineering/quizzes/System_and_User_Roles.json": "598ea0aea6dc44229aab9d4196111798",
"assets/assets/PySpark/quizzes/Advanced_Topics.json": "4f84ede333f159993c5f99c7b8197722",
"assets/assets/PySpark/quizzes/Data_Analysis.json": "e109e560ccac7e4a3ac0f18b2ebbca97",
"assets/assets/PySpark/quizzes/Data_Ingestion_and_Loading.json": "9b469f907a287ec4e0d4df0ea470bfb8",
"assets/assets/PySpark/quizzes/Data_Transformation.json": "e89f44ca02da62c1166e5051a2ab0f6f",
"assets/assets/PySpark/quizzes/Deep_Learning_with_PySpark.json": "0ae1334bfd0b719f66f208fc09fb3a29",
"assets/assets/PySpark/quizzes/Graph_Analytics_with_PySpark.json": "6f58bcca4ef7fbfd0587de4ea9b0882c",
"assets/assets/PySpark/quizzes/Introduction_to_PySpark.json": "67245696af0ea8e011dc3d7d6cc39553",
"assets/assets/PySpark/quizzes/Machine_Learning_with_PySpark.json": "beae0613c6b9e7687798237991a69287",
"assets/assets/Python%2520Programming/quizzes/advanced.json": "5350a04d5b8732ce8c44bcc9923db529",
"assets/assets/Python%2520Programming/quizzes/applications.json": "a834dcc1aa78f68610c7bc930d464d7f",
"assets/assets/Python%2520Programming/quizzes/control_flow.json": "f6080c708fcfa57a24e11e66d8a6b319",
"assets/assets/Python%2520Programming/quizzes/data_structures.json": "a96ac6145f8d3cfaf48e582690cab15a",
"assets/assets/Python%2520Programming/quizzes/error_handling.json": "cfd783d06707d0922580f05113576c0b",
"assets/assets/Python%2520Programming/quizzes/files.json": "0eee6df248869c738e119edd221821bd",
"assets/assets/Python%2520Programming/quizzes/functions.json": "fd4cbb8e709500c387e7f85113a26c25",
"assets/assets/Python%2520Programming/quizzes/intro.json": "883bc27b606284a669da2dfc57fb59b9",
"assets/assets/Python%2520Programming/quizzes/modules.json": "ad16024e472a08827f77bef118941932",
"assets/assets/Python%2520Programming/quizzes/oops.json": "8d08d6a35f8d4e9bca263d3aad44fa86",
"assets/assets/PyTorch/quizzes/Advanced_Topics.json": "20dbdeb4c421c47f110db382ab08c46f",
"assets/assets/PyTorch/quizzes/Introduction_to_PyTorch.json": "fa01a087179bb202e3ba994b60a1dfc7",
"assets/assets/PyTorch/quizzes/Neural_Networks.json": "0ff88fe57ba6b7f2f397546bf8c01815",
"assets/assets/PyTorch/quizzes/PyTorch_for_Deep_Learning.json": "9f64a3ee554d3b0242f738e0fc8417d8",
"assets/assets/PyTorch/quizzes/Tensors_and_Autograd.json": "05adce7c792e0e24a3fcb65e85c2ed4c",
"assets/assets/PyTorch/quizzes/Training_and_Optimization.json": "86538d952e292e5cf5ba2da64df2fd5b",
"assets/assets/PyTorch/quizzes/Transfer_Learning.json": "7c9baac0d05477e9a6583e25b44682ef",
"assets/assets/ReactJs/quizzes/react_accessibility.json": "a473a71afe7d5639c0b71ea0f78d5877",
"assets/assets/ReactJs/quizzes/react_advanced.json": "3294cefae19db320a6e33ff332bf1312",
"assets/assets/ReactJs/quizzes/react_apis.json": "dbaebbd8db34bb9fcbe66cc18349be36",
"assets/assets/ReactJs/quizzes/react_components.json": "2a7e941c989e5b4f5e7401e5f13cf5be",
"assets/assets/ReactJs/quizzes/react_deployment.json": "db380b4c99073658eb88d9fb13263325",
"assets/assets/ReactJs/quizzes/react_hooks.json": "d120b36c82abd9a5f090d042a3192823",
"assets/assets/ReactJs/quizzes/react_intro.json": "84e7a3f9bb882aedfd234e4e4c7281cd",
"assets/assets/ReactJs/quizzes/react_optimization.json": "0748f5f784bf85b84ddb8f27a32ca73d",
"assets/assets/ReactJs/quizzes/react_routing.json": "7a074441670a1c963ea0d6ee5245e0d7",
"assets/assets/ReactJs/quizzes/react_security.json": "40867ae0fbd5cda533efdb5c41974b1f",
"assets/assets/ReactJs/quizzes/react_state_management.json": "b36129eca0a6c5b1826b93900e8cb635",
"assets/assets/Reinforcement%2520Learning/Actor_Critic_Methods.json": "a9aabb2226817f32cedf15e6ea109d72",
"assets/assets/Reinforcement%2520Learning/Deep_Q_Networks.json": "4264150e6ddb79dffbacfe20840e4ce9",
"assets/assets/Reinforcement%2520Learning/Introduction_to_Reinforcement_Learning.json": "1189c78cbcf4af3a90e43dfdf2218f9d",
"assets/assets/Reinforcement%2520Learning/Markov_Decision_Process.json": "3da152a647bf5abb26c4036a11dbe88a",
"assets/assets/Reinforcement%2520Learning/Policy_Gradient_Methods.json": "eb77b6bcb41aab32c0bf167271554121",
"assets/assets/Reinforcement%2520Learning/Q-Learning.json": "91cc9a12878c67b0aa8b52a6206e0948",
"assets/assets/Reinforcement%2520Learning/Reinforcement_Learning_Algorithms.json": "d0c563a2150036020c17c62f46a330fb",
"assets/assets/SciPy/quizzes/Advanced_Topics.json": "92af5e88669663c1083aab8dfefa4c5b",
"assets/assets/SciPy/quizzes/Image_Processing.json": "9510244d706d30a774c198b1186a44c7",
"assets/assets/SciPy/quizzes/Integration_and_Optimization.json": "ce3eb8d26e40e9325fb5c53c1c6f3e6c",
"assets/assets/SciPy/quizzes/Interpolation.json": "28ea0bf45a73a3cc31a68d0ebf8b1c01",
"assets/assets/SciPy/quizzes/Introduction_to_SciPy.json": "b42d0422c3f32a20d4f881fcb7e113b5",
"assets/assets/SciPy/quizzes/Linear_Algebra.json": "01508578b333444e3f605a1b044be080",
"assets/assets/SciPy/quizzes/Machine_Learning_with_SciPy.json": "2fd15543124799d529ca2c05ed16a402",
"assets/assets/SciPy/quizzes/Signal_Processing.json": "86b802e57fecaecde42fb33b03d4579b",
"assets/assets/SciPy/quizzes/Spatial_Data_Analysis.json": "6e5027d936ccf3bb2ebfb3e13a379170",
"assets/assets/SciPy/quizzes/Statistics.json": "ebebaa5b37a3566559c3d3f50696b4b0",
"assets/assets/Software%2520Testing/quizzes/CI_CD_Integration.json": "bc778128486f4bce5d1c2717f8e0d670",
"assets/assets/Software%2520Testing/quizzes/Compatibility_Testing.json": "20c8099a5aadccdec65ad52521668fc9",
"assets/assets/Software%2520Testing/quizzes/Defect_Management.json": "ed76ef1204c611d57fd121dfb4eb0d39",
"assets/assets/Software%2520Testing/quizzes/Functional_NonFunctional_Testing.json": "f1318d5e0748186f646f79ab83059643",
"assets/assets/Software%2520Testing/quizzes/Intro_to_Testing.json": "89903e463947afd999d8e8fd5c834b5f",
"assets/assets/Software%2520Testing/quizzes/Performance_Testing.json": "4dca9eb6191361d4991be92736e2d2f9",
"assets/assets/Software%2520Testing/quizzes/Regression_Exploratory_Testing.json": "16545bc2a560dc1030a987356c35453e",
"assets/assets/Software%2520Testing/quizzes/Security_Usability_Testing.json": "2c921c7ac29765bd861f83fa87e57f0c",
"assets/assets/Software%2520Testing/quizzes/System_Acceptance_Testing.json": "0953a7d4378ebab48e2bc48f6b481d95",
"assets/assets/Software%2520Testing/quizzes/Testing_Levels.json": "ecc4f58fd7dc77caf9bc7c84bb579989",
"assets/assets/Software%2520Testing/quizzes/Test_Automation.json": "eea3963edcc8547084a357976c3c54e6",
"assets/assets/Software%2520Testing/quizzes/Test_Data_Management.json": "b7dd6c12f7c95c0d16f0bca948a0f03d",
"assets/assets/Software%2520Testing/quizzes/Test_Design_Execution.json": "3c735fdab66700d1bf1045642dbe089b",
"assets/assets/Software%2520Testing/quizzes/Test_Reporting_Analytics.json": "88abe511425b46aa29dc79694f726dce",
"assets/assets/Software%2520Testing/quizzes/Unit_Integration_Testing.json": "f0345f5e2f2acbddfd8b91b0e267626e",
"assets/assets/Statistics/quizzes/Data_Analysis_and_Interpretation.json": "b1f8be7b486d3be040377e2800f66525",
"assets/assets/Statistics/quizzes/Descriptive_Statistics.json": "25dfb5c81559fb39b52969341f6d1d1b",
"assets/assets/Statistics/quizzes/Hypothesis_Testing.json": "bbd3b703454f7ddb7a0424b40ef2c535",
"assets/assets/Statistics/quizzes/Inferential_Statistics.json": "f31c338392634527cad4ba949347e927",
"assets/assets/Statistics/quizzes/Introduction_to_Statistics.json": "46be9fb80a3e78a574194c1ef7b77963",
"assets/assets/Statistics/quizzes/Multivariate_Analysis.json": "26fcfe85ff193c96c77d74ce59a5e3f9",
"assets/assets/Statistics/quizzes/Probability_and_Random_Variables.json": "fadcd305d474b85e7ef9351c323063f1",
"assets/assets/Statistics/quizzes/Regression_Analysis.json": "7ab9e7e1fd802f74b9fdf6a9fd04eabe",
"assets/assets/Statistics/quizzes/Statistical_Methods.json": "26ba30c4d328250e05a8c7f2a011806f",
"assets/assets/Statistics/quizzes/Time_Series_Analysis.json": "d1975d7e1f95b65696e208b9906dbc9b",
"assets/assets/student_home/logo.png": "d50db7cacaba6f3fff5c9d13b283d428",
"assets/assets/student_home/qrcode.jpg": "bb15dcae08e75ee837eaa40f51112ad5",
"assets/assets/student_home/sfcmp.png": "62aa2a5c327025b8c04d34c76626f7cc",
"assets/assets/student_home/sf_home_1.png": "e8f726c374db3837ae9cfd0694c6638f",
"assets/assets/student_home/sf_home_2.png": "a13e5bae3fa2eb43a777fe9c6869c537",
"assets/assets/Sudoku/quizzes/Advanced_Techniques.json": "e5d20f427fd36be79bee2faffce15d52",
"assets/assets/Sudoku/quizzes/Basic_Solving_Techniques.json": "c82ae1560be289380375a706bf38f73c",
"assets/assets/Sudoku/quizzes/Competition_Strategies.json": "b31aad4129ab2da9da43e3ee9c499f0b",
"assets/assets/Sudoku/quizzes/Grid_Structure.json": "a175b7e79545f1c11e5978d17fcf4ac5",
"assets/assets/Sudoku/quizzes/Intermediate_Strategies.json": "299165d31ee665f80a8ef4ca90f1b0a8",
"assets/assets/Sudoku/quizzes/Logic_and_Reasoning.json": "ff95a6a2f9a4a501fd04564065069f02",
"assets/assets/Sudoku/quizzes/Number_Placement_Rules.json": "18a1774c1f0830f15386d64730368e02",
"assets/assets/Sudoku/quizzes/Pattern_Recognition.json": "30745d9bbb4af281b194b8d3983acdb8",
"assets/assets/Sudoku/quizzes/Puzzle_Creation.json": "0cd5507da01101c37b6a237cba5b14b2",
"assets/assets/Sudoku/quizzes/Speed_Solving_Methods.json": "2cdad14b410c8ef4a74ca803dba3d398",
"assets/assets/Sudoku/quizzes/Sudoku_Basics.json": "95d88ae42c6620f657f4ae8ed5f5cb98",
"assets/assets/Sudoku/quizzes/Variant_Sudoku_Types.json": "9f73a44e8a3a1c587d06391c36ebafc6",
"assets/assets/Supervised%2520Learning/quizzes/Decision_Trees.json": "c0fff524bcea59570676db81fe44dd65",
"assets/assets/Supervised%2520Learning/quizzes/K_Nearest_Neighbors.json": "5709d0b0c106d736b35a2df83be7dcc9",
"assets/assets/Supervised%2520Learning/quizzes/Linear_Regression.json": "78c767c955122802715eea76b16acca6",
"assets/assets/Supervised%2520Learning/quizzes/Logistic_Regression.json": "c34f0de6fc8d583af83465276a983b81",
"assets/assets/Supervised%2520Learning/quizzes/Model_Evaluation.json": "bd0f3ba9353389543568013e0d61a814",
"assets/assets/Supervised%2520Learning/quizzes/Random_Forests.json": "ca9fce41157fa7d8452846e469a353be",
"assets/assets/Supervised%2520Learning/quizzes/Support_Vector_Machines.json": "fb25e8fa6eece6545a7a02a048c36a19",
"assets/assets/Supervised%2520Learning/quizzes/Time_Series_Forecasting.json": "4933b91b3f4e1a09df6a7dff1b1ccc7b",
"assets/assets/Tableau/quizzes/Advanced_Tableau_Topics.json": "1c7ee84197a7d37c40cfd4a1c36284de",
"assets/assets/Tableau/quizzes/Dashboard_Creation.json": "b6fe70ab1a56ee1d8e1dd84603740af7",
"assets/assets/Tableau/quizzes/Data_Exploration.json": "1fad8444a585dcf0a5da313906041278",
"assets/assets/Tableau/quizzes/Data_Modeling.json": "88711847891be6f3985471bd68ede87e",
"assets/assets/Tableau/quizzes/Data_Visualization_Basics.json": "65722407b579063a68550ee2e992acba",
"assets/assets/Tableau/quizzes/Interactive_Visualizations.json": "abcff8322d4389476a4f3cd2fbce2326",
"assets/assets/Tableau/quizzes/Introduction_to_Tableau.json": "10c51e0db947a9f8c4c4e189389c04b1",
"assets/assets/TensorFlow/quizzes/Advanced_Topics.json": "70917c9038d638aca6ce1863d6b9b2f1",
"assets/assets/TensorFlow/quizzes/Convolutional_Neural_Networks.json": "3f5cb11efe853429a6716209ae368597",
"assets/assets/TensorFlow/quizzes/Generative_Adversarial_Networks.json": "23d7dba649939de1392d63e72ca7afb2",
"assets/assets/TensorFlow/quizzes/Introduction_to_TensorFlow.json": "7a6dfcc675acef67cb71e3fca161c86c",
"assets/assets/TensorFlow/quizzes/Neural_Networks_with_TensorFlow.json": "3bb274f414abe9da9c063332203a5518",
"assets/assets/TensorFlow/quizzes/Recurrent_Neural_Networks.json": "37b333136ee258564cbffbcda86255a0",
"assets/assets/TensorFlow/quizzes/TensorFlow_Basics.json": "69e8884434445bc4f2fab7e035f53bc4",
"assets/assets/TensorFlow/quizzes/Transfer_Learning.json": "061d35ee82ee76ea98596f7d280b61fc",
"assets/assets/universities.json": "d15718fa20a6934dd22346bc7896d7dd",
"assets/assets/Unsupervised%2520Learning/quizzes/Association_Rules.json": "df19d1168e55c919cd506b51085d9794",
"assets/assets/Unsupervised%2520Learning/quizzes/Clustering.json": "3fbe545b025f6385db543e72393e58d8",
"assets/assets/Unsupervised%2520Learning/quizzes/Dimensionality_Reduction.json": "2f247bee9b3f7874d61afc6b34cea380",
"assets/assets/Unsupervised%2520Learning/quizzes/K_Means_Clustering.json": "4d211d677c0772fc680053e83a9e4f6f",
"assets/assets/Unsupervised%2520Learning/quizzes/Linear_Discriminant_Analysis.json": "c6e726d631ff170e41448e965cfa6425",
"assets/assets/Unsupervised%2520Learning/quizzes/Pricipal_Component_Analysis.json": "4ce3211c6a922194a4cef0674862b47d",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "649bcb06ec439bbe3f2d1d0f3a168cd3",
"assets/NOTICES": "cb47c33bb2073f8c0cfb3120ea5a01cf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "283f629835fb880f0b63b2d470935d4d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c2f61e1189891f07a692be9efa2d2150",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "3fb2f56397c2a0fb86ea6872c6145842",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "8643c20c190144cfb0460cadbf8e0604",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "c3f069dae20c5886126377fc583dc483",
"icons/Icon-192.png": "9b9147761b789428e0bc90a976b1fcb5",
"icons/Icon-512.png": "d50db7cacaba6f3fff5c9d13b283d428",
"icons/Icon-maskable-192.png": "9b9147761b789428e0bc90a976b1fcb5",
"icons/Icon-maskable-512.png": "d50db7cacaba6f3fff5c9d13b283d428",
"index.html": "ec92ad47dce089c17f6c4203cb097d14",
"/": "ec92ad47dce089c17f6c4203cb097d14",
"main.dart.js": "130ffa3d344e9324b3da780de59e0559",
"manifest.json": "7e48f1849e1583eb1ef555a3858e8b54",
"version.json": "900445f2862463ceb58ffd4b5de97cb4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
