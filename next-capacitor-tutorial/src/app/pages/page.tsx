'use client';

import { Camera, CameraResultType } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import Link from 'next/link';

export default function Pages() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <p>다른 페이지</p>
            <button
                onClick={() => {
                    if (Capacitor.isNativePlatform()) {
                        alert('네이티브 플랫폼 입니다.');
                    } else {
                        alert('네이티브 플랫폼이 아닙니다.');
                    }
                }}
            >
                네이티브 플랫폼 여부
            </button>
            <button
                onClick={() => {
                    alert(`플랫폼: ${Capacitor.getPlatform()}`);
                }}
            >
                현재 플랫폼
            </button>
            <button
                onClick={async () => {
                    try {
                        const image = await Camera.getPhoto({
                            quality: 90,
                            allowEditing: true,
                            resultType: CameraResultType.Uri,
                        });
                        alert(image.path);
                        alert(image.webPath);
                    } catch (error) {
                        alert(error);
                    }
                }}
            >
                사진 가져오기
            </button>
            <Link href={'/'}>원래 페이지로</Link>
        </main>
    );
}
