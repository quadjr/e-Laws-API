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


/**
 * 法令種別:
 *   * `Constitution`         - 憲法
 *   * `Act`                  - 法律
 *   * `CabinetOrder`         - 政令
 *   * `ImperialOrder`        - 勅令
 *   * `MinisterialOrdinance` - 府省令
 *   * `Rule`                 - 規則
 *   * `Misc`                 - その他
 * @export
 */
export const LawType = {
    Constitution: 'Constitution',
    Act: 'Act',
    CabinetOrder: 'CabinetOrder',
    ImperialOrder: 'ImperialOrder',
    MinisterialOrdinance: 'MinisterialOrdinance',
    Rule: 'Rule',
    Misc: 'Misc'
} as const;
export type LawType = typeof LawType[keyof typeof LawType];


export function LawTypeFromJSON(json: any): LawType {
    return LawTypeFromJSONTyped(json, false);
}

export function LawTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LawType {
    return json as LawType;
}

export function LawTypeToJSON(value?: LawType | null): any {
    return value as any;
}

