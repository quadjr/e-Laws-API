/* tslint:disable */
/* eslint-disable */
/**
 * 法令APIプロトタイプ
 * 法令データを取得・検索するAPIです。  * 必ずデジタル庁の<a href=\"https://www.digital.go.jp/policies/legal-practice/public-test\" target=\"_blank\">法令APIプロトタイプ公開テストのページ</a>をご確認頂き、利用規約に同意頂いた上でご利用ください。  * 本プロトタイプは、一時的な試験提供ですので、実際のシステムへの組み込み等についてはお控えください。実際のサービス提供への活用を頂くには、正式提供している<a href=\"https://elaws.e-gov.go.jp/apitop/\" target=\"_blank\">現行の法令API</a>、もしくは今後検討している高度化後の法令APIをご利用頂く必要があることにご留意ください。  * 使用するデータは、テスト用データのため、一部含まれない法令や、法令標準XMLスキーマには無い属性や項目が含まれていることがあります。  * 本環境はサーバーメンテナンスを行うことがあり、メンテナンス中はご利用がいただけない事があります。長期間の停止を伴うサーバーメンテナンスを行う際はデジタル庁HPでお知らせ致します。また、API仕様についても、公開テスト期間中に変更される可能性がありますので、ご了承ください。 
 *
 * The version of the OpenAPI document: 2.1.77
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { LawInfo } from './LawInfo';
import {
    LawInfoFromJSON,
    LawInfoFromJSONTyped,
    LawInfoToJSON,
} from './LawInfo';
import type { RevisionInfo } from './RevisionInfo';
import {
    RevisionInfoFromJSON,
    RevisionInfoFromJSONTyped,
    RevisionInfoToJSON,
} from './RevisionInfo';

/**
 * 
 * @export
 * @interface KeywordResponseItemsInner
 */
export interface KeywordResponseItemsInner {
    /**
     * 
     * @type {LawInfo}
     * @memberof KeywordResponseItemsInner
     */
    lawInfo?: LawInfo;
    /**
     * 
     * @type {RevisionInfo}
     * @memberof KeywordResponseItemsInner
     */
    revisionInfo?: RevisionInfo;
    /**
     * 条文内容（ハイライト箇所はspanタグで囲う）
     * @type {string}
     * @memberof KeywordResponseItemsInner
     */
    sentence?: string;
}

/**
 * Check if a given object implements the KeywordResponseItemsInner interface.
 */
export function instanceOfKeywordResponseItemsInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KeywordResponseItemsInnerFromJSON(json: any): KeywordResponseItemsInner {
    return KeywordResponseItemsInnerFromJSONTyped(json, false);
}

export function KeywordResponseItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeywordResponseItemsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lawInfo': !exists(json, 'law_info') ? undefined : LawInfoFromJSON(json['law_info']),
        'revisionInfo': !exists(json, 'revision_info') ? undefined : RevisionInfoFromJSON(json['revision_info']),
        'sentence': !exists(json, 'sentence') ? undefined : json['sentence'],
    };
}

export function KeywordResponseItemsInnerToJSON(value?: KeywordResponseItemsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'law_info': LawInfoToJSON(value.lawInfo),
        'revision_info': RevisionInfoToJSON(value.revisionInfo),
        'sentence': value.sentence,
    };
}
