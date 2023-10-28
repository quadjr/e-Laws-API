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
import type { AttachedFile } from './AttachedFile';
import {
    AttachedFileFromJSON,
    AttachedFileFromJSONTyped,
    AttachedFileToJSON,
} from './AttachedFile';

/**
 * 添付ファイル情報
 * @export
 * @interface AttachedFilesInfo
 */
export interface AttachedFilesInfo {
    /**
     * 添付ファイルデータ（添付ファイルをフォルダ名pictに収集し、フォルダ全体をZIP形式で圧縮したファイルをBase64でエンコードした文字列）
     * @type {string}
     * @memberof AttachedFilesInfo
     */
    imageData?: string;
    /**
     * 添付ファイル一覧
     * @type {Array<AttachedFile>}
     * @memberof AttachedFilesInfo
     */
    attachedFiles?: Array<AttachedFile>;
}

/**
 * Check if a given object implements the AttachedFilesInfo interface.
 */
export function instanceOfAttachedFilesInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttachedFilesInfoFromJSON(json: any): AttachedFilesInfo {
    return AttachedFilesInfoFromJSONTyped(json, false);
}

export function AttachedFilesInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttachedFilesInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'imageData': !exists(json, 'image_data') ? undefined : json['image_data'],
        'attachedFiles': !exists(json, 'attached_files') ? undefined : ((json['attached_files'] as Array<any>).map(AttachedFileFromJSON)),
    };
}

export function AttachedFilesInfoToJSON(value?: AttachedFilesInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'image_data': value.imageData,
        'attached_files': value.attachedFiles === undefined ? undefined : ((value.attachedFiles as Array<any>).map(AttachedFileToJSON)),
    };
}

