package com.shortcuts.example.java.services.site;

import com.shortcuts.example.java.services.BaseShortcutsAPIService;
import com.shortcuts.example.java.services.ShortcutsAPIGetService;
import com.shortcuts.example.java.util.ShortcutsAPIException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;

import java.net.URI;
import java.util.Optional;

@Slf4j
@Service
public class GetSitesService extends BaseShortcutsAPIService
        implements ShortcutsAPIGetService<Void, GetSitesResponse> {

    public GetSitesService() {
        super(HttpMethod.GET);
    }

    @Override
    public GetSitesResponse call(
            String jwtToken,
            Optional<HttpHeaders> httpHeaders,
            Optional<MultiValueMap<String, String>> queryParameters,
            Object... uriVariables) throws ShortcutsAPIException {
        URI endpoint = getEndpointURI("sites", queryParameters, uriVariables);
        HttpHeaders headers = setupAuthorizationHeader(httpHeaders, jwtToken);
        GetSitesResponse getSitesResponse = restTemplateCallingUtil.getForObject(
                endpoint,
                headers,
                GetSitesResponse.class,
                uriVariables);
        log.info("response: {}", getSitesResponse);
        return getSitesResponse;
    }
}
