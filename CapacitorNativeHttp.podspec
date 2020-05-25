
  Pod::Spec.new do |s|
    s.name = 'CapacitorNativeHttp'
    s.version = '0.0.1'
    s.summary = 'Native htttp calls for capacitor in android'
    s.license = 'MIT'
    s.homepage = 'git@github.com:greasysock/capacitor-native-http.git'
    s.author = 'Chris Gresock'
    s.source = { :git => 'git@github.com:greasysock/capacitor-native-http.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end