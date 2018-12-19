
var chilkat = require('chilkat_electron_2_0_win32');

export default class Converter {
	
	static convert(chilkat.Cert pemFile, chilkat.PrivateKey privateKey, var outDir) {
		
	}
	
}

function chilkatExample() {

    //  First load our certificate into a certificate object,
    //  and then get it as a cert chain object.
    var cert = new chilkat.Cert();

    var success = cert.LoadFromFile("qa_data/rsaes-oaep/cert.pem");
    if (success !== true) {
        console.log(cert.LastErrorText);
        return;
    }

    //  This is the certificate PEM that we loaded:

    //  -----BEGIN CERTIFICATE-----
    //  MIIDozCCAougAwIBAgIJAMRwugDmvniwMA0GCSqGSIb3DQEBCwUAMGgxCzAJBgNV
    //  BAYTAlVTMQswCQYDVQQIDAJJTDEQMA4GA1UEBwwHV2hlYXRvbjEhMB8GA1UECgwY
    //  SW50ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMRcwFQYDVQQDDA5DaGlsa2F0V2lkZ2V0
    //  czAeFw0xNzA0MTgxMzQxNDVaFw0yMjA0MTcxMzQxNDVaMGgxCzAJBgNVBAYTAlVT
    //  MQswCQYDVQQIDAJJTDEQMA4GA1UEBwwHV2hlYXRvbjEhMB8GA1UECgwYSW50ZXJu
    //  ZXQgV2lkZ2l0cyBQdHkgTHRkMRcwFQYDVQQDDA5DaGlsa2F0V2lkZ2V0czCCASIw
    //  DQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMXhMR7TNHSaHgrEGvAmHNqw/8xV
    //  5TcngVO//yHBniDHas5b2zm0AkhY5EW9dn0wTWHivoRZC2soH7/bxRi4uYUaxgve
    //  YLXw6DO2MHSpuTvhSG3+AjsBDa9kXegn9XT1MdPHk9PrHR0sKXGuimkLf4r+Q1oM
    //  iGlhbUyRATwVlmo6AndgniDnj2RFBYV8E8SQ+7SnLPJdXZRDbLNVY/DY6D9stRAY
    //  rHuz/WBlVW7TQVuWwe7Cd9bfFqjqzLwLksKevWvHGteYDGeiCi+uvMMNfp/Br79Y
    //  zJYF/YpTJYE0POBiMwth1FUIYKpZf/O2eUd6RW9h6hocC5QWU9LAq+7kKFMCAwEA
    //  AaNQME4wHQYDVR0OBBYEFKBCsni1BfOyH3dSoY8yL4mDeNbpMB8GA1UdIwQYMBaA
    //  FKBCsni1BfOyH3dSoY8yL4mDeNbpMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEL
    //  BQADggEBAF2iV69ma5XegVWpxbc0gui63RE8NjW2dBW0fa4a4fwNH2f8oetZEjw4
    //  kscx7p4ESxyPtDUkLNplAth+D8NNh9IQDWIld+FZrJsis4tkpVcpMsbmB2CW8fL2
    //  IVnVznAN+/PMYEAkeSOnovUGlREHZZu4b9rMVm89+aoCQ9z+byjW9kLKHyvLnUai
    //  uEHp+0EVFP91CRSIcTCXsW1c5yZ8k5bqL0HlauuOO4TA3IegyYM9xBubmcxg8cRO
    //  2F1k+Ge1lu3e+WY+lihaO0p762dF6g/SUMMrFneCPdIhvt4u7Esc9FDxE3xZEq3x
    //  cS5sHTxtTM0LVBi378/x5m1hln5hSJU=
    //  -----END CERTIFICATE-----

    //  Get it as a certificate chain.
    // certChain: CertChain
    var certChain = cert.GetCertChain();
    if (cert.LastMethodSuccess !== true) {
        console.log(cert.LastErrorText);
        return;
    }

    //  Next, load the corresponding private key from a PEM.
    var privKey = new chilkat.PrivateKey();
    success = privKey.LoadPemFile("qa_data/rsaes-oaep/privateKey.pem");
    if (success !== true) {
        console.log(privKey.LastErrorText);

        return;
    }

    //  This is the private key PEM:

    //  -----BEGIN RSA PRIVATE KEY-----
    //  MIIEpAIBAAKCAQEAxeExHtM0dJoeCsQa8CYc2rD/zFXlNyeBU7//IcGeIMdqzlvb
    //  ObQCSFjkRb12fTBNYeK+hFkLaygfv9vFGLi5hRrGC95gtfDoM7YwdKm5O+FIbf4C
    //  OwENr2Rd6Cf1dPUx08eT0+sdHSwpca6KaQt/iv5DWgyIaWFtTJEBPBWWajoCd2Ce
    //  IOePZEUFhXwTxJD7tKcs8l1dlENss1Vj8NjoP2y1EBise7P9YGVVbtNBW5bB7sJ3
    //  1t8WqOrMvAuSwp69a8ca15gMZ6IKL668ww1+n8Gvv1jMlgX9ilMlgTQ84GIzC2HU
    //  VQhgqll/87Z5R3pFb2HqGhwLlBZT0sCr7uQoUwIDAQABAoIBAGCP5LWDIWzpLFHa
    //  or6gCqKZjyo6nFFO4Ohqn+jsH+slBTTQVGmTMy302uhBbYnnwUtMJ+ZTwaO3/85T
    //  Q5otwrJ2f0CZcx42AkoB1SGJFVBoPj0WoCYE/JWjZ8P7g+dgI8GR+cyHRjzPKSZF
    //  o1thdgrwyxMtXH/4QCsF89FLQ4xwCJUkj+w0KBkX8isWcBJnKip81MK8rxhgMJ6v
    //  5+DBVvlvm4BRz0hva7HB3TaZgo9ZWZdoSJQ/l33yfIL8H0EJjC6uJ/Bn77JtDzcv
    //  1oUF02Ebu8/Re7RpUqdTIb1GamrOCjuZN66SrCOsh9rRzueU3UTLzjb9FDv8FQDA
    //  5Dm59KECgYEA6zJ2LaiUywth80rAC34jEF85aC3vyKK0MxYELLB9Nw6MNFD1PZly
    //  YkOcI2kxVV+1KqtRYFlfEpCL4flqVnqjVj5jTCCOXqO6RjnPLoupf0yLpj60raO6
    //  Ouw5EDGjfUDBQtkCQNOx0nZLftVy30Ck/V2gVw9sEgWQV0YRavuymKMCgYEA12HB
    //  eHHSo/dK7keiIK7RRQu2ibALXWXsGq9lUbnQAunKRCa3qQtc8OwGRZsdj9u8HwCB
    //  zDu5QIbaQCa1SyDz1CsOysOfTYNhh1SZ4GLiu7/b0v5ktgdtosT9niowo08Y4ZU+
    //  lA8p2eriylznacNOkA8O1g8m1etHqV+cVKUMvJECgYEApoeVO6DosZd+pCfiMIEA
    //  TMBPwl78L6BcXOuSyx2vmwMW7JgB/LqgTck3Ta9Wue9JNEwXE1RUR63HDZpu24p8
    //  Cj2kSyumAoaFBuI5uugyfCrzmiM+BNAvtTa69Kdg7feinzVOLh52AuG1dLmnW0HH
    //  UIoxVFNcHqqH1/OJs6lBfGcCgYEAkQXhn5gEnSMF8SuKnzcW8cbRQiSnglv+fnlb
    //  X4wd49hHuVvYjpp4GkDSeEvZu+PY54cP3tTYB/rFOizWJaAqjdHwQ9c0jJzKLrVo
    //  Zw4uXPzypz9j0K1vxQmfO8Bsv4mi10IGwOr04yalTlz/9NbtL1L0Sm4pWCD0P7eB
    //  K/12dgECgYBXNV5NcLpZhpjo8q05xAiFuwC2e29qYyVwcFVhYdYguutRKImZtjSE
    //  dndNAxa7EDL9NRc5SjX4NHAZoImADRSbgc2rIq2ePY8WORaR+iKsVx7PJGHSiXTL
    //  30X9E3com8ctyTsZTnlJ4Dm7SefkN0NKzqwjxXxZLaUteWBPUt+YAg==
    //  -----END RSA PRIVATE KEY-----

    //  Create a PFX object instance, and add the private key + cert chain.
    var pfx = new chilkat.Pfx();
    success = pfx.AddPrivateKey(privKey,certChain);
    if (success !== true) {
        console.log(pfx.LastErrorText);

        return;
    }

    //  Finally, write the PFX w/ a password.
    success = pfx.ToFile("pfxPassword","qa_output/sample.pfx");
    if (success !== true) {
        console.log(pfx.LastErrorText);
        return;
    }

    console.log("Success.");

}