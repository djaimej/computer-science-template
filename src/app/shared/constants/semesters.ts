import { IRawSubject } from "@models/interfaces/general";
import { SUBJECT_11 } from "@shared/documents/semester-1/11";
import { SUBJECT_12 } from "@shared/documents/semester-1/12";
import { SUBJECT_13 } from "@shared/documents/semester-1/13";
import { SUBJECT_14 } from "@shared/documents/semester-1/14";
import { SUBJECT_21 } from "@shared/documents/semester-2/21";
import { SUBJECT_22 } from "@shared/documents/semester-2/22";
import { SUBJECT_23 } from "@shared/documents/semester-2/23";
import { SUBJECT_24 } from "@shared/documents/semester-2/24";
import { SUBJECT_31 } from "@shared/documents/semester-3/31";
import { SUBJECT_32 } from "@shared/documents/semester-3/32";
import { SUBJECT_33 } from "@shared/documents/semester-3/33";
import { SUBJECT_34 } from "@shared/documents/semester-3/34";
import { SUBJECT_41 } from "@shared/documents/semester-4/41";
import { SUBJECT_42 } from "@shared/documents/semester-4/42";
import { SUBJECT_43 } from "@shared/documents/semester-4/43";
import { SUBJECT_44 } from "@shared/documents/semester-4/44";
import { SUBJECT_51 } from "@shared/documents/semester-5/51";
import { SUBJECT_52 } from "@shared/documents/semester-5/52";
import { SUBJECT_53 } from "@shared/documents/semester-5/53";
import { SUBJECT_54 } from "@shared/documents/semester-5/54";
import { SUBJECT_61 } from "@shared/documents/semester-6/61";
import { SUBJECT_62 } from "@shared/documents/semester-6/62";
import { SUBJECT_63 } from "@shared/documents/semester-6/63";
import { SUBJECT_71 } from "@shared/documents/semester-7/71";
import { SUBJECT_72 } from "@shared/documents/semester-7/72";
import { SUBJECT_73 } from "@shared/documents/semester-7/73";
import { SUBJECT_81 } from "@shared/documents/semester-8/81";
import { SUBJECT_82 } from "@shared/documents/semester-8/82";

/* ALL SUBJECTS */
export const SEMESTERS: IRawSubject[] = [SUBJECT_11, SUBJECT_12, SUBJECT_13, SUBJECT_14, SUBJECT_21, SUBJECT_22, SUBJECT_23, SUBJECT_24,
    SUBJECT_31, SUBJECT_32, SUBJECT_33, SUBJECT_34, SUBJECT_41, SUBJECT_42, SUBJECT_43, SUBJECT_44,
    SUBJECT_51, SUBJECT_52, SUBJECT_53, SUBJECT_54, SUBJECT_61, SUBJECT_62, SUBJECT_63,
    SUBJECT_71, SUBJECT_72, SUBJECT_73, SUBJECT_81, SUBJECT_82];
    
/* BY SEMESTER */
export const SEMESTER1: IRawSubject[] = [SUBJECT_11, SUBJECT_12, SUBJECT_13, SUBJECT_14];
export const SEMESTER2: IRawSubject[] = [SUBJECT_21, SUBJECT_22, SUBJECT_23, SUBJECT_24];
export const SEMESTER3: IRawSubject[] = [SUBJECT_31, SUBJECT_32, SUBJECT_33, SUBJECT_34];
export const SEMESTER4: IRawSubject[] = [SUBJECT_41, SUBJECT_42, SUBJECT_43, SUBJECT_44];
export const SEMESTER5: IRawSubject[] = [SUBJECT_51, SUBJECT_52, SUBJECT_53, SUBJECT_54];
export const SEMESTER6: IRawSubject[] = [SUBJECT_61, SUBJECT_62, SUBJECT_63];
export const SEMESTER7: IRawSubject[] = [SUBJECT_71, SUBJECT_72, SUBJECT_73];
export const SEMESTER8: IRawSubject[] = [SUBJECT_81, SUBJECT_82];