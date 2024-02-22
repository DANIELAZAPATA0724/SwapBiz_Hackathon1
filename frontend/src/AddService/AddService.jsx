import "./AddService.css";
import { FrameLinear } from 'FrameLibrary';

export const AddService = () => {
    return (
        <div className="mobile-upload-your">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                            <FrameLinear className="frame-linear-instance" />
                            <Honeycomb className="honeycomb-instance" />
                            <YellowContinue className="yellow-continue-button" />
                        </div>
                    </div>
                    <div className="form-mobile-update">
                        <div className="overlap-2">
                            <div className="rectangle-3" />
                            <div className="text-wrapper-5">¿Qué subirás?</div>
                            <div className="text-wrapper-6">Otra categoría</div>
                            <div className="precio-ubicacion">
                                <p>Precio</p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <p>Ubicación</p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <p>Descripción</p>
                            </div>
                            <div className="text-wrapper-7">Fotos</div>
                            <div className="rectangle-4" />
                            <div className="rectangle-5" />
                            <div className="rectangle-6" />
                            <div className="text-wrapper-8">Visualizar</div>
                            <UploadPhoyos className="upload-phoyos-instance" />
                            <div className="group-2">
                                <div className="rectangle-7" />
                                <div className="rectangle-8" />
                                <div className="rectangle-9" />
                            </div>
                            <IconosPaginaSube className="iconos-pagina-sube-tu-anuncio-cat" />
                            <IconosEditTrash className="iconos-edit-trash-instance" edit="image.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};