'use strict'
const env = process.env

let envVariables = {
  LEARNER_URL: env.sunbird_learner_player_url || 'https://staging.open-sunbird.org/api/',
  CONTENT_URL: env.sunbird_content_player_url || 'https://staging.open-sunbird.org/api/',
  CONTENT_PROXY_URL: env.sunbird_content_proxy_url || 'https://staging.open-sunbird.org',
  PORTAL_REALM: env.sunbird_portal_realm || 'sunbird',
  PORTAL_AUTH_SERVER_URL: env.sunbird_portal_auth_server_url || 'https://staging.open-sunbird.org/auth',
  PORTAL_AUTH_SERVER_CLIENT: env.sunbird_portal_auth_server_client || 'portal',
  APPID: env.sunbird_appid,
  DEFAUULT_TENANT: env.sunbird_default_tenant,
  EKSTEP_ENV: env.ekstep_env || 'qa',
  PORTAL_PORT: env.sunbird_port || 3000,
  PORTAL_API_AUTH_TOKEN: env.sunbird_api_auth_token,
  PORTAL_TELEMETRY_PACKET_SIZE: env.sunbird_telemetry_packet_size || 1000,
  PORTAL_ECHO_API_URL: env.sunbird_echo_api_url || 'https://staging.open-sunbird.org/api/echo/',
  PORTAL_AUTOCREATE_TRAMPOLINE_USER: env.sunbird_autocreate_trampoline_user || 'true',
  PORTAL_TRAMPOLINE_CLIENT_ID: env.sunbird_trampoline_client_id || 'trampoline',
  PORTAL_TRAMPOLINE_SECRET: env.sunbird_trampoline_secret,
  ENABLE_PERMISSION_CHECK: env.sunbird_enabless_permission_check || 0,
  PORTAL_SESSION_STORE_TYPE: env.sunbird_session_store_type || 'in-memory',
  PORTAL_TITLE_NAME: env.sunbird_portal_title_name || 'Sunbird',
  PORTAL_CDN_URL: env.sunbird_cdn_url || '',
  PORTAL_THEME: env.sunbird_theme || 'default',
  PORTAL_DEFAULT_LANGUAGE: env.sunbird_portal_default_language || 'en',
  PORTAL_PRIMARY_BUNDLE_LANGUAGE: env.sunbird_portal_primary_bundle_language || 'en',
  CONTENT_SERVICE_UPSTREAM_URL: env.sunbird_content_service_upstream_url || 'http://localhost:5000/',
  LEARNER_SERVICE_UPSTREAM_URL: env.sunbird_learner_service_upstream_url || 'http://localhost:9000/',
  DATASERVICE_URL: env.sunbird_dataservice_url || 'https://staging.open-sunbird.org/api/',
  KEY_CLOAK_PUBLIC: env.sunbird_keycloak_public || 'true',
  KEY_CLOAK_REALM: env.sunbird_keycloak_realm || 'sunbird',
  CACHE_STORE: env.sunbird_cache_store || 'memory',
  CACHE_TTL: env.sunbird_cache_ttl || 1800,
  CONTENT_CHANNEL_FILTER_TYPE: env.sunbird_content_channel_filter_type || 'all',
  learner_Service_Local_BaseUrl: env.sunbird_learner_service_local_base_url || 'http://learner-service:9000',
  content_Service_Local_BaseUrl: env.sunbird_content_service_local_base_url || 'http://content_service_content_service:5000',
  MOBILE_APP_URL: env.sunbird_mobile_app_url || 'http://www.sunbird.org',
  COURSE_COMPLITION_BADGE_ID: env.sunbird_course_complition_badgeid,
  BADGE_ASSIGN_USERNAME: env.sunbird_badge_assign_username,
  BADGE_ASSIGN_USER_PASSWORD: env.sunbird_badge_assign_user_password,
  AZURE_ACCOUNT_NAME: env.julia_azure_account_name,
  AZURE_ACCOUNT_KEY: env.julia_azure_account_key,
  AZURE_STORAGE_URL: env.julia_azure_storage_url,
  CERTIFICATE_STORE_CONTAINER_NAME: env.julia_certificate_storage_container_name || 'certificate',
  CERTIFICATE_PROVIDER_NAME: env.julia_certificate_provider_name || 'Julia Computing, Inc.',
  CERTIFICATE_INSTRUCTOR_NAME: env.julia_certificate_instructor_name || 'Alan Edelman',
  PAYMENT_PROVIDER_BASE_URL: env.julia_payment_provider_base_url || 'https://mercury-uat.phonepe.com',
  PAYMENT_PROVIDER_SALT_KEY: env.julia_payment_provider_salt_key,
  PAYMENT_PROVIDER_SALT_INDEX: env.julia_payment_provider_salt_index || 1,
  PAYMENT_TRANSACTION_ID_PREFIX: env.julia_transaction_id_prefix || 'TXN',
  PAYMENT_COLLECT_MERCHANT_ID: env.julia_payment_collect_merchant_id,
  PAYMENT_COLLECT_REQUEST_TIME_OUT: env.julia_payment_collect_request_timeout || 300,
  PAYMENT_PROVIDER_COLLECT_REQUEST_URI: env.julia_payment_provider_collect_request_uri || '/v3/charge',
  PAYMENT_COLLECT_CALLBACk_BASE_URL: env.julia_payment_collect_callback_base_url || 'https://aiprohub.org',
  PAYMENT_COLLECT_CALLBACk_URI: env.julia_payment_collect_callback_uri || '/phonepe/v1/callback',
  SIGN_UP_USER_PROVIDER: env.julia_sign_up_user_provider,
  PAYMENT_PROVIDER_REFUND_REQUEST_URL: env.julia_payment_refund_request_base_url || 'https://mercury-stg.phonepe.com',
  PAYMENT_PROVIDER_REFUND_REQUEST_URI: env.julia_payment_refund_callback_uri || '/v3/credit/instant',
  PAYMENT_PROVIDER_REFUND_CALLBACk_URI: env.julia_payment_refund_callback_uri || '/phonepe/v1/callback/refund'
}

envVariables.PORTAL_CASSANDRA_URLS = (env.sunbird_cassandra_urls && env.sunbird_cassandra_urls !== '')
  ? env.sunbird_cassandra_urls.split(',') : ['localhost']

module.exports = envVariables
