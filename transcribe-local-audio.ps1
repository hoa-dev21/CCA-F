$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Speech
$audioPath = Join-Path $PSScriptRoot 'sources\vertex-media\289173-audio.wav'
$outputPath = Join-Path $PSScriptRoot 'sources\vertex-media\289173-local-asr.json'
$recognizer = New-Object System.Speech.Recognition.SpeechRecognitionEngine([System.Globalization.CultureInfo]::GetCultureInfo('en-US'))
$recognizer.LoadGrammar((New-Object System.Speech.Recognition.DictationGrammar))
$recognizer.InitialSilenceTimeout = [TimeSpan]::FromSeconds(15)
$recognizer.EndSilenceTimeout = [TimeSpan]::FromMilliseconds(500)
$recognizer.SetInputToWaveFile($audioPath)
$segments = New-Object System.Collections.Generic.List[object]
try {
    while ($true) {
        $result = $recognizer.Recognize()
        if ($null -eq $result) { break }
        $segments.Add([pscustomobject]@{startSeconds=$result.Audio.AudioPosition.TotalSeconds;durationSeconds=$result.Audio.Duration.TotalSeconds;confidence=$result.Confidence;text=$result.Text})
        if ($segments.Count % 10 -eq 0) { Write-Output ('Recognized ' + $segments.Count + ' audio segments') }
    }
    $record = [pscustomobject]@{source='https://anthropic-partners.skilljar.com/claude-with-google-vertex/289173';sourceType='Local Windows speech recognition of official audio; not official captions and requires review';segments=$segments.ToArray();text=($segments | ForEach-Object {$_.text}) -join "`n"}
    $record | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath $outputPath -Encoding UTF8
    Write-Output ('Saved ' + $segments.Count + ' local speech segments')
} finally { $recognizer.Dispose() }
