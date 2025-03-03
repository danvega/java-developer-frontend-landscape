package dev.danvega.vaadin_sessions;

import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.grid.GridVariant;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

import java.util.List;

@Route("")
public class SessionView extends VerticalLayout {

    public SessionView(SessionRepository repository) {

        // Set the layout properties to center the content
        setSizeFull();
        setDefaultHorizontalComponentAlignment(Alignment.CENTER);

        // Title
        H1 title = new H1("Spring I/O Sessions");

        // Grid
        Grid<Session> grid = new Grid<>(Session.class,false);
        grid.addColumn(Session::title)
                .setHeader("Title");
        grid.addColumn(Session::speakers)
                .setHeader("Speaker(s)");
        grid.addThemeVariants(GridVariant.LUMO_COMPACT);;

        // get data from the repository and add it to the grid
        List<Session> sessions = repository.findAll();
        grid.setItems(sessions);

        // Container layout for the title and grid with fixed width
        VerticalLayout container = new VerticalLayout(title, grid);
        container.setHeightFull();
        container.setWidthFull();
        container.setDefaultHorizontalComponentAlignment(Alignment.CENTER);
        container.setJustifyContentMode(JustifyContentMode.CENTER);

        add(container);
    }

}
