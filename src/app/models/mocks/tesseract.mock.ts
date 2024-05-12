export const mockWord: Tesseract.Word = {
  symbols: null,
  choices: null,
  text: 'COEN',
  confidence: 94.72541809082031,
  baseline: null,
  bbox: null,
  is_underlined: false,
  in_dictionary: false,
  direction: 'NEUTRAL',
  language: 'eng',
  is_bold: false,
  is_italic: false,
  is_monospace: false,
  is_numeric: true,
  is_serif: false,
  is_smallcaps: false,
  font_id: -1,
  font_name: '',
  font_size: 18,
  line: null,
  paragraph: null,
  block: null,
  page: null,
};

export const mockLine: Tesseract.Line = {
  words: [
    mockWord,
    { ...mockWord, text: '3253' },
    { ...mockWord, text: 'DESIGN' },
    { ...mockWord, text: 'PROJECT' },
    { ...mockWord, text: '1' },
    { ...mockWord, text: '2.00' },
    { ...mockWord, text: '3' },
  ],
  text: 'COEN 3253 DESIGN PROJECT 1 2.00 3\n',
  confidence: 93.93181610107422,
  baseline: null,
  bbox: null,
  paragraph: null,
  block: null,
  page: null,
  symbols: null,
};

export const mockLineWithIncGrade: Tesseract.Line = {
  ...mockLine,
  words: [
    mockWord,
    { ...mockWord, text: '3253' },
    { ...mockWord, text: 'DESIGN' },
    { ...mockWord, text: 'PROJECT' },
    { ...mockWord, text: '1' },
    { ...mockWord, text: 'INC/2.75' },
    { ...mockWord, text: '3' },
  ],
};

export const mockLineWithNoGrade: Tesseract.Line = {
  ...mockLine,
  words: [
    mockWord,
    { ...mockWord, text: '3253' },
    { ...mockWord, text: 'DESIGN' },
    { ...mockWord, text: 'PROJECT' },
    { ...mockWord, text: '1' },
  ],
};

export const mockLineWithNoCredit: Tesseract.Line = {
  ...mockLine,
  words: [
    mockWord,
    { ...mockWord, text: '3253' },
    { ...mockWord, text: 'DESIGN' },
    { ...mockWord, text: 'PROJECT' },
    { ...mockWord, text: '1' },
    { ...mockWord, text: '2.00' },
  ],
};

export const mockPage: Tesseract.Page = {
  blocks: [],
  box: null,
  confidence: 91,
  debug: null,
  hocr: '',
  imageBinary: null,
  imageColor: null,
  imageGrey: null,
  lines: [mockLine],
  oem: 'LSTM_ONLY',
  osd: null,
  paragraphs: [],
  pdf: null,
  psm: 'SINGLE_BLOCK',
  rotateRadians: 0,
  symbols: [],
  text: "ER a\nCOEN 3253 DESIGN PROJECT 1 2.00 3\nCOEN 3404 COMPUTER SYSTEMS ARCHITECTURE 1.50 4\nCOEN 3414 OPERATING SYSTEMS 1.75 4\nCOEN 4043 ADVANCED WEB COMPUTING 1.75 3\nENSC 2073 ENGINEERING MANAGEMENT 2.50 3\n2015, SUMMER\nCOEN 4022 PRACTICUM 2 1.75 2\n'COEN 3273 DESIGN PROJECT 2 1.75 3\nCOEN 3423 COMPUTER SYSTEMS ADMINISTRATION 1.00 3\nCOEN 3433 SYSTEMS ANALYSIS AND DESIGN 1.25 3\n'COEN 3444 OBJECT ORIENTED PROGRAMMING 1.75 4\nCOEN 3453 COMPUTER PROJECT MANAGEMENT 1.25 3\nCOEN 4073 RELATIONAL DATABASE MANAGEMENT 1.50 3\nCOEN 3212 COMPUTER ENGINEERING ETHICS AND COMPUTER LAWS 1.75 2\nCOEN 3284 COMPUTER NETWORKS 3.00 4\nCOEN 3291 COMPUTER SEMINAR AND FIELD TRIPS 1.75 1\nCOEN 3463 SOFTWARE ENGINEERING 2.00 3\nCOEN 3473 COMPUTER TECHNOPRENEURSHIP 2.50 3\nCOEN 3483 TOTAL QUALITY MANAGEMENT IN COMPUTER ENGINEERING 2.75 3\nCOEN 5013 VISUAL BASIC .NET 1.75 3\nCOEN 5023 ADVANCED JAVA PROGRAMMING 1.25 3\n",
  tsv: "1\t1\t0\t0\t0\t0\t0\t0\t1410\t708\t-1\t\n2\t1\t1\t0\t0\t0\t0\t7\t1389\t692\t-1\t\n3\t1\t1\t1\t0\t0\t0\t0\t1389\t699\t-1\t\n4\t1\t1\t1\t1\t0\t986\t7\t138\t2\t-1\t\n5\t1\t1\t1\t1\t1\t986\t7\t58\t2\t12.516113\tER\n5\t1\t1\t1\t1\t2\t1060\t7\t64\t2\t26.177170\ta\n4\t1\t1\t1\t2\t0\t10\t28\t1379\t48\t-1\t\n5\t1\t1\t1\t2\t1\t10\t28\t73\t21\t92.711365\tCOEN\n5\t1\t1\t1\t2\t2\t92\t30\t52\t21\t86.093575\t3253\n5\t1\t1\t1\t2\t3\t218\t33\t95\t20\t95.964401\tDESIGN\n5\t1\t1\t1\t2\t4\t324\t35\t110\t20\t95.654259\tPROJECT\n5\t1\t1\t1\t2\t5\t444\t37\t6\t18\t95.506599\t1\n5\t1\t1\t1\t2\t6\t1195\t32\t45\t44\t94.725418\t2.00\n5\t1\t1\t1\t2\t7\t1379\t38\t10\t20\t96.867088\t3\n4\t1\t1\t1\t3\t0\t10\t57\t1379\t30\t-1\t\n5\t1\t1\t1\t3\t1\t10\t57\t74\t22\t92.881592\tCOEN\n5\t1\t1\t1\t3\t2\t93\t59\t52\t20\t96.837196\t3404\n5\t1\t1\t1\t3\t3\t218\t62\t144\t20\t95.898346\tCOMPUTER\n5\t1\t1\t1\t3\t4\t371\t64\t116\t21\t96.199463\tSYSTEMS\n5\t1\t1\t1\t3\t5\t496\t66\t199\t20\t96.286613\tARCHITECTURE\n5\t1\t1\t1\t3\t6\t1198\t68\t41\t19\t96.842583\t1.50\n5\t1\t1\t1\t3\t7\t1378\t68\t11\t18\t43.237247\t4\n4\t1\t1\t1\t4\t0\t10\t87\t1379\t29\t-1\t\n5\t1\t1\t1\t4\t1\t10\t87\t74\t21\t92.770615\tCOEN\n5\t1\t1\t1\t4\t2\t93\t89\t53\t20\t96.629814\t3414\n5\t1\t1\t1\t4\t3\t218\t91\t149\t21\t96.586357\tOPERATING\n5\t1\t1\t1\t4\t4\t377\t93\t117\t21\t96.078674\tSYSTEMS\n5\t1\t1\t1\t4\t5\t1198\t97\t40\t19\t95.417374\t1.75\n5\t1\t1\t1\t4\t6\t1377\t97\t12\t18\t96.119141\t4\n4\t1\t1\t1\t5\t0\t10\t116\t1378\t29\t-1\t\n5\t1\t1\t1\t5\t1\t10\t116\t74\t21\t92.302109\tCOEN\n5\t1\t1\t1\t5\t2\t93\t119\t52\t20\t96.528069\t4043\n5\t1\t1\t1\t5\t3\t218\t121\t149\t20\t95.978836\tADVANCED\n5\t1\t1\t1\t5\t4\t376\t123\t56\t19\t95.978836\tWEB\n5\t1\t1\t1\t5\t5\t441\t124\t154\t20\t96.637573\tCOMPUTING\n5\t1\t1\t1\t5\t6\t1198\t126\t40\t19\t95.763435\t1.75\n5\t1\t1\t1\t5\t7\t1378\t126\t10\t19\t96.975433\t3\n4\t1\t1\t1\t6\t0\t11\t146\t1377\t28\t-1\t\n5\t1\t1\t1\t6\t1\t11\t146\t69\t21\t91.429916\tENSC\n5\t1\t1\t1\t6\t2\t89\t147\t52\t20\t96.927422\t2073\n5\t1\t1\t1\t6\t3\t220\t150\t177\t20\t96.170364\tENGINEERING\n5\t1\t1\t1\t6\t4\t408\t152\t188\t20\t96.002457\tMANAGEMENT\n5\t1\t1\t1\t6\t5\t1194\t155\t45\t19\t95.425484\t2.50\n5\t1\t1\t1\t6\t6\t1378\t155\t10\t19\t96.907646\t3\n4\t1\t1\t1\t7\t0\t245\t179\t180\t23\t-1\t\n5\t1\t1\t1\t7\t1\t245\t179\t50\t23\t74.239227\t2015,\n5\t1\t1\t1\t7\t2\t311\t180\t114\t22\t96.390862\tSUMMER\n4\t1\t1\t1\t8\t0\t11\t204\t1377\t29\t-1\t\n5\t1\t1\t1\t8\t1\t11\t204\t74\t21\t93.013611\tCOEN\n5\t1\t1\t1\t8\t2\t93\t206\t53\t19\t96.896194\t4022\n5\t1\t1\t1\t8\t3\t220\t208\t152\t20\t96.784271\tPRACTICUM\n5\t1\t1\t1\t8\t4\t382\t210\t11\t18\t96.848808\t2\n5\t1\t1\t1\t8\t5\t1198\t214\t40\t19\t96.273392\t1.75\n5\t1\t1\t1\t8\t6\t1378\t214\t10\t19\t96.993141\t2\n4\t1\t1\t1\t9\t0\t3\t262\t1385\t29\t-1\t\n5\t1\t1\t1\t9\t1\t3\t262\t82\t21\t0.000000\t'COEN\n5\t1\t1\t1\t9\t2\t94\t263\t52\t21\t96.431137\t3273\n5\t1\t1\t1\t9\t3\t220\t266\t95\t19\t96.718384\tDESIGN\n5\t1\t1\t1\t9\t4\t326\t267\t109\t19\t94.952164\tPROJECT\n5\t1\t1\t1\t9\t5\t444\t268\t10\t19\t96.701645\t2\n5\t1\t1\t1\t9\t6\t1198\t272\t40\t19\t92.492073\t1.75\n5\t1\t1\t1\t9\t7\t1377\t272\t11\t19\t96.606926\t3\n4\t1\t1\t1\t10\t0\t10\t291\t1378\t29\t-1\t\n5\t1\t1\t1\t10\t1\t10\t291\t75\t21\t92.165581\tCOEN\n5\t1\t1\t1\t10\t2\t94\t293\t52\t20\t96.916550\t3423\n5\t1\t1\t1\t10\t3\t220\t295\t143\t19\t95.576630\tCOMPUTER\n5\t1\t1\t1\t10\t4\t373\t296\t116\t20\t95.576630\tSYSTEMS\n5\t1\t1\t1\t10\t5\t498\t297\t227\t21\t96.329781\tADMINISTRATION\n5\t1\t1\t1\t10\t6\t1197\t301\t42\t19\t95.867691\t1.00\n5\t1\t1\t1\t10\t7\t1378\t301\t10\t19\t96.975403\t3\n4\t1\t1\t1\t11\t0\t11\t320\t1377\t30\t-1\t\n5\t1\t1\t1\t11\t1\t11\t320\t75\t21\t93.013504\tCOEN\n5\t1\t1\t1\t11\t2\t93\t322\t53\t20\t96.709900\t3433\n5\t1\t1\t1\t11\t3\t220\t324\t118\t20\t96.273186\tSYSTEMS\n5\t1\t1\t1\t11\t4\t347\t325\t129\t20\t95.931931\tANALYSIS\n5\t1\t1\t1\t11\t5\t484\t327\t57\t19\t95.931931\tAND\n5\t1\t1\t1\t11\t6\t548\t326\t95\t21\t96.010880\tDESIGN\n5\t1\t1\t1\t11\t7\t1197\t330\t41\t19\t95.932648\t1.25\n5\t1\t1\t1\t11\t8\t1378\t330\t10\t20\t96.981186\t3\n4\t1\t1\t1\t12\t0\t0\t349\t1388\t29\t-1\t\n5\t1\t1\t1\t12\t1\t0\t349\t86\t22\t18.048180\t'COEN\n5\t1\t1\t1\t12\t2\t93\t350\t54\t21\t96.629097\t3444\n5\t1\t1\t1\t12\t3\t219\t352\t98\t20\t93.780670\tOBJECT\n5\t1\t1\t1\t12\t4\t325\t354\t131\t20\t96.358772\tORIENTED\n5\t1\t1\t1\t12\t5\t465\t354\t198\t22\t96.220703\tPROGRAMMING\n5\t1\t1\t1\t12\t6\t1197\t359\t41\t19\t91.470055\t1.75\n5\t1\t1\t1\t12\t7\t1376\t360\t12\t18\t95.196999\t4\n4\t1\t1\t1\t13\t0\t10\t378\t1378\t30\t-1\t\n5\t1\t1\t1\t13\t1\t10\t378\t75\t22\t91.285789\tCOEN\n5\t1\t1\t1\t13\t2\t93\t380\t53\t21\t96.015015\t3453\n5\t1\t1\t1\t13\t3\t219\t382\t144\t20\t96.230240\tCOMPUTER\n5\t1\t1\t1\t13\t4\t374\t383\t110\t20\t96.105576\tPROJECT\n5\t1\t1\t1\t13\t5\t491\t384\t189\t21\t96.117058\tMANAGEMENT\n5\t1\t1\t1\t13\t6\t1197\t388\t41\t19\t95.610107\t1.25\n5\t1\t1\t1\t13\t7\t1378\t389\t10\t19\t96.990250\t3\n4\t1\t1\t1\t14\t0\t10\t408\t1378\t29\t-1\t\n5\t1\t1\t1\t14\t1\t10\t408\t76\t22\t90.932083\tCOEN\n5\t1\t1\t1\t14\t2\t92\t409\t54\t21\t96.913246\t4073\n5\t1\t1\t1\t14\t3\t220\t411\t167\t20\t95.456314\tRELATIONAL\n5\t1\t1\t1\t14\t4\t397\t413\t139\t20\t96.398018\tDATABASE\n5\t1\t1\t1\t14\t5\t543\t413\t190\t21\t96.248215\tMANAGEMENT\n5\t1\t1\t1\t14\t6\t1197\t417\t42\t19\t96.771301\t1.50\n5\t1\t1\t1\t14\t7\t1378\t418\t10\t19\t96.972939\t3\n4\t1\t1\t1\t15\t0\t10\t467\t1378\t28\t-1\t\n5\t1\t1\t1\t15\t1\t10\t467\t75\t21\t93.066589\tCOEN\n5\t1\t1\t1\t15\t2\t93\t467\t54\t21\t96.092522\t3212\n5\t1\t1\t1\t15\t3\t219\t469\t145\t20\t96.172890\tCOMPUTER\n5\t1\t1\t1\t15\t4\t374\t470\t176\t21\t96.826584\tENGINEERING\n5\t1\t1\t1\t15\t5\t559\t471\t89\t20\t95.466415\tETHICS\n5\t1\t1\t1\t15\t6\t657\t472\t56\t19\t95.466415\tAND\n5\t1\t1\t1\t15\t7\t720\t472\t142\t20\t94.948433\tCOMPUTER\n5\t1\t1\t1\t15\t8\t870\t473\t73\t20\t95.338425\tLAWS\n5\t1\t1\t1\t15\t9\t1198\t475\t40\t19\t93.477692\t1.75\n5\t1\t1\t1\t15\t10\t1378\t477\t10\t18\t96.745468\t2\n4\t1\t1\t1\t16\t0\t10\t497\t1379\t27\t-1\t\n5\t1\t1\t1\t16\t1\t10\t497\t75\t20\t92.899734\tCOEN\n5\t1\t1\t1\t16\t2\t93\t497\t54\t21\t95.353943\t3284\n5\t1\t1\t1\t16\t3\t219\t498\t145\t20\t96.713646\tCOMPUTER\n5\t1\t1\t1\t16\t4\t373\t499\t144\t21\t95.890366\tNETWORKS\n5\t1\t1\t1\t16\t5\t1195\t504\t44\t19\t96.850182\t3.00\n5\t1\t1\t1\t16\t6\t1377\t506\t12\t18\t93.176239\t4\n4\t1\t1\t1\t17\t0\t10\t526\t1376\t28\t-1\t\n5\t1\t1\t1\t17\t1\t10\t526\t75\t21\t92.970093\tCOEN\n5\t1\t1\t1\t17\t2\t92\t527\t52\t20\t96.473442\t3291\n5\t1\t1\t1\t17\t3\t219\t527\t145\t21\t96.572678\tCOMPUTER\n5\t1\t1\t1\t17\t4\t373\t528\t118\t20\t95.620552\tSEMINAR\n5\t1\t1\t1\t17\t5\t498\t529\t56\t20\t95.620552\tAND\n5\t1\t1\t1\t17\t6\t563\t529\t72\t20\t96.540039\tFIELD\n5\t1\t1\t1\t17\t7\t643\t530\t70\t19\t96.535431\tTRIPS\n5\t1\t1\t1\t17\t8\t1198\t533\t40\t20\t96.240219\t1.75\n5\t1\t1\t1\t17\t9\t1381\t535\t5\t19\t94.716576\t1\n4\t1\t1\t1\t18\t0\t10\t556\t1378\t27\t-1\t\n5\t1\t1\t1\t18\t1\t10\t556\t74\t20\t93.158043\tCOEN\n5\t1\t1\t1\t18\t2\t93\t556\t53\t20\t96.290680\t3463\n5\t1\t1\t1\t18\t3\t219\t556\t143\t21\t96.202873\tSOFTWARE\n5\t1\t1\t1\t18\t4\t373\t557\t176\t21\t96.619705\tENGINEERING\n5\t1\t1\t1\t18\t5\t1195\t562\t45\t19\t95.065819\t2.00\n5\t1\t1\t1\t18\t6\t1378\t564\t10\t19\t96.710335\t3\n4\t1\t1\t1\t19\t0\t10\t585\t1379\t26\t-1\t\n5\t1\t1\t1\t19\t1\t10\t585\t74\t21\t92.897598\tCOEN\n5\t1\t1\t1\t19\t2\t93\t586\t53\t20\t96.722908\t3473\n5\t1\t1\t1\t19\t3\t218\t585\t147\t21\t92.703384\tCOMPUTER\n5\t1\t1\t1\t19\t4\t372\t586\t284\t21\t92.437157\tTECHNOPRENEURSHIP\n5\t1\t1\t1\t19\t5\t1196\t591\t44\t19\t91.313530\t2.50\n5\t1\t1\t1\t19\t6\t1379\t593\t10\t18\t96.992149\t3\n4\t1\t1\t1\t20\t0\t10\t615\t1379\t26\t-1\t\n5\t1\t1\t1\t20\t1\t10\t615\t74\t21\t93.042351\tCOEN\n5\t1\t1\t1\t20\t2\t93\t615\t53\t21\t96.224686\t3483\n5\t1\t1\t1\t20\t3\t218\t615\t88\t21\t95.331451\tTOTAL\n5\t1\t1\t1\t20\t4\t315\t616\t116\t23\t96.144463\tQUALITY\n5\t1\t1\t1\t20\t5\t440\t616\t190\t20\t96.144463\tMANAGEMENT\n5\t1\t1\t1\t20\t6\t638\t617\t25\t18\t96.041145\tIN\n5\t1\t1\t1\t20\t7\t671\t616\t143\t20\t95.880455\tCOMPUTER\n5\t1\t1\t1\t20\t8\t822\t617\t176\t21\t96.416481\tENGINEERING\n5\t1\t1\t1\t20\t9\t1196\t620\t43\t19\t94.718689\t2.75\n5\t1\t1\t1\t20\t10\t1379\t622\t10\t19\t96.981987\t3\n4\t1\t1\t1\t21\t0\t9\t644\t1380\t26\t-1\t\n5\t1\t1\t1\t21\t1\t9\t645\t75\t20\t93.030724\tCOEN\n5\t1\t1\t1\t21\t2\t93\t645\t53\t20\t96.486359\t5013\n5\t1\t1\t1\t21\t3\t218\t644\t99\t21\t96.296707\tVISUAL\n5\t1\t1\t1\t21\t4\t326\t645\t76\t19\t91.217224\tBASIC\n5\t1\t1\t1\t21\t5\t411\t645\t57\t19\t69.783401\t.NET\n5\t1\t1\t1\t21\t6\t1200\t649\t40\t19\t95.000710\t1.75\n5\t1\t1\t1\t21\t7\t1380\t651\t9\t19\t96.960106\t3\n4\t1\t1\t1\t22\t0\t10\t674\t1379\t25\t-1\t\n5\t1\t1\t1\t22\t1\t10\t674\t74\t21\t92.536591\tCOEN\n5\t1\t1\t1\t22\t2\t92\t674\t53\t21\t96.965813\t5023\n5\t1\t1\t1\t22\t3\t218\t674\t150\t21\t95.914597\tADVANCED\n5\t1\t1\t1\t22\t4\t377\t674\t67\t20\t95.914597\tJAVA\n5\t1\t1\t1\t22\t5\t452\t674\t200\t20\t96.513336\tPROGRAMMING\n5\t1\t1\t1\t22\t6\t1200\t678\t41\t20\t94.203247\t1.25\n5\t1\t1\t1\t22\t7\t1380\t680\t9\t19\t96.980537\t3\n",
  unlv: null,
  sd: null,
  version: '5.1.0-279-gb981c',
  words: [],
};
export const mockRecognizeResult: Tesseract.RecognizeResult = {
  jobId: 'Job-4-69c88',
  data: mockPage,
};
